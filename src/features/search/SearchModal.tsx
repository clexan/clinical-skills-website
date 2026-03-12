import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { Link } from "react-router-dom";

import type { SearchResult } from "./search";
import { useSearchModal } from "./SearchModalContext";

import styles from "./SearchModal.module.css";

let searchModulePromise: Promise<typeof import("./search")> | null = null;
let searchPreparationPromise: Promise<typeof import("./search")> | null = null;
const SEARCH_TRIGGER_SELECTOR = '[data-search-trigger="header"]';

function loadSearchModule() {
  searchModulePromise ??= import("./search");

  return searchModulePromise;
}

function prepareSearchModule() {
  searchPreparationPromise ??= loadSearchModule().then(async (module) => {
    await module.prepareHandbookSearch();

    return module;
  });

  return searchPreparationPromise;
}

function getFocusableElements(container: HTMLElement | null) {
  if (!container) {
    return [] as HTMLElement[];
  }

  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'input, a[href], button, [tabindex]:not([tabindex="-1"])',
    ),
  );
}

function getFallbackTriggerElement() {
  return document.querySelector<HTMLElement>(SEARCH_TRIGGER_SELECTOR);
}

function getMeaningfulActiveElement() {
  const activeElement = document.activeElement;

  if (!(activeElement instanceof HTMLElement)) {
    return null;
  }

  if (activeElement === document.body || activeElement === document.documentElement) {
    return null;
  }

  return activeElement;
}

export function SearchModal() {
  const { isOpen, closeSearch } = useSearchModal();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searchReady, setSearchReady] = useState(false);
  const [searchModule, setSearchModule] = useState<Awaited<ReturnType<typeof loadSearchModule>> | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const resultRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const shouldRestoreFocusRef = useRef(true);
  const trimmedQuery = query.trim();

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setResults([]);
      shouldRestoreFocusRef.current = true;
      return;
    }

    previousFocusRef.current = getMeaningfulActiveElement() ?? getFallbackTriggerElement();

    const frame = window.requestAnimationFrame(() => {
      inputRef.current?.focus();
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || searchReady) {
      return;
    }

    let cancelled = false;

    prepareSearchModule()
      .then((module) => {
        if (cancelled) {
          return;
        }

        setSearchModule(module);
        setSearchReady(true);
      })
      .catch(() => {
        if (!cancelled) {
          setSearchModule(null);
          setSearchReady(true);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [isOpen, searchReady]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;

      if (shouldRestoreFocusRef.current) {
        window.requestAnimationFrame(() => {
          const restoreTarget =
            previousFocusRef.current && previousFocusRef.current.isConnected
              ? previousFocusRef.current
              : getFallbackTriggerElement();

          restoreTarget?.focus();
        });
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      const panel = panelRef.current;

      if (!panel) {
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        closeSearch();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = getFocusableElements(panel);

      if (!focusableElements.length) {
        event.preventDefault();
        panel.focus();
        return;
      }

      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (!(activeElement instanceof HTMLElement) || !panel.contains(activeElement)) {
        event.preventDefault();
        (event.shiftKey ? lastFocusable : firstFocusable).focus();
        return;
      }

      if (event.shiftKey && activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      } else if (!event.shiftKey && activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    };

    const handleFocusIn = (event: FocusEvent) => {
      const panel = panelRef.current;

      if (!panel || !(event.target instanceof Node) || panel.contains(event.target)) {
        return;
      }

      const [firstFocusable] = getFocusableElements(panel);

      (firstFocusable ?? panel).focus();
    };

    document.addEventListener("keydown", handleKeyDown, true);
    document.addEventListener("focusin", handleFocusIn);

    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
      document.removeEventListener("focusin", handleFocusIn);
    };
  }, [closeSearch, isOpen]);

  useEffect(() => {
    if (!searchModule) {
      setResults([]);
      return;
    }

    setResults(searchModule.searchHandbook(query));
  }, [query, searchModule]);

  useEffect(() => {
    resultRefs.current = resultRefs.current.slice(0, results.length);
  }, [results.length]);

  const focusResultAtIndex = (index: number) => {
    const target = resultRefs.current[index];

    if (!target) {
      return;
    }

    target.focus();
    target.scrollIntoView({
      block: "nearest",
    });
  };

  const handleInputKeyDown = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (!results.length) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      focusResultAtIndex(0);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      focusResultAtIndex(results.length - 1);
    }
  };

  const handleResultKeyDown =
    (index: number) => (event: ReactKeyboardEvent<HTMLAnchorElement>) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();

        if (index < results.length - 1) {
          focusResultAtIndex(index + 1);
        }
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();

        if (index === 0) {
          inputRef.current?.focus();
          return;
        }

        focusResultAtIndex(index - 1);
      }
    };

  const handleResultSelect = () => {
    shouldRestoreFocusRef.current = false;
    closeSearch();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.backdrop} onClick={() => closeSearch()}>
      <div
        aria-label="Search handbook"
        aria-modal="true"
        className={styles.panel}
        onClick={(event) => event.stopPropagation()}
        ref={panelRef}
        role="dialog"
        tabIndex={-1}
      >
        <div className={styles.inputArea}>
          <input
            aria-label="Search handbook"
            className={styles.input}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder="Search topics, chapters, or section headings"
            ref={inputRef}
            type="search"
            value={query}
          />
        </div>

        <div aria-live="polite" className={styles.results}>
          {!searchReady ? <p className={styles.emptyState}>Preparing search index…</p> : null}

          {searchReady && !trimmedQuery ? (
            <p className={styles.emptyState}>Start typing to search the handbook.</p>
          ) : null}

          {searchReady && trimmedQuery && results.length === 0 ? (
            <p className={styles.emptyState}>No results found for "{trimmedQuery}".</p>
          ) : null}

          {searchReady && results.length > 0
            ? results.map((result, index) => {
                const target = result.headingId
                  ? `/chapter/${result.chapterSlug}#${result.headingId}`
                  : `/chapter/${result.chapterSlug}`;

                return (
                  <Link
                    className={styles.resultLink}
                    key={result.id}
                    onClick={handleResultSelect}
                    onKeyDown={handleResultKeyDown(index)}
                    ref={(element) => {
                      resultRefs.current[index] = element;
                    }}
                    to={target}
                  >
                    <div className={styles.resultMeta}>
                      <p className={styles.partTitle}>{result.partTitle}</p>
                      {result.kind === "section" && result.headingText ? (
                        <div className={styles.sectionMeta}>
                          <span className={styles.sectionBadge}>Section</span>
                          <p className={styles.sectionHeading}>{result.headingText}</p>
                        </div>
                      ) : null}
                    </div>

                    <h2 className={styles.resultTitle}>
                      <span className={styles.resultNumber}>{result.chapterNumber}</span>
                      <span>{result.chapterTitle}</span>
                    </h2>

                    <p className={styles.excerpt}>{result.excerpt}</p>
                  </Link>
                );
              })
            : null}
        </div>

        <div className={styles.footer}>
          <span aria-hidden="true" className={styles.shortcutHint}>
            ⌘K
          </span>

          <button className={styles.closeButton} onClick={() => closeSearch()} type="button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
