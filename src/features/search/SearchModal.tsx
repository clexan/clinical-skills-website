import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { Link } from "react-router-dom";

import type { SearchResult } from "./search";
import { useSearchModal } from "./SearchModalContext";

import styles from "./SearchModal.module.css";

let searchModulePromise: Promise<typeof import("./search")> | null = null;
let searchPreparationPromise: Promise<typeof import("./search")> | null = null;

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

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    inputRef.current?.focus();
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
          previousFocusRef.current?.focus();
        });
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeSearch();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
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

  const handlePanelKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = getFocusableElements(panelRef.current);

    if (!focusableElements.length) {
      event.preventDefault();
      return;
    }

    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    const activeElement = document.activeElement;

    if (event.shiftKey && activeElement === firstFocusable) {
      event.preventDefault();
      lastFocusable.focus();
    }

    if (!event.shiftKey && activeElement === lastFocusable) {
      event.preventDefault();
      firstFocusable.focus();
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
        aria-label="Search the handbook"
        aria-modal="true"
        className={styles.panel}
        onClick={(event) => event.stopPropagation()}
        onKeyDown={handlePanelKeyDown}
        ref={panelRef}
        role="dialog"
      >
        <div className={styles.inputArea}>
          <input
            aria-label="Search the handbook"
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
                        <p className={styles.sectionLabel}>Section · {result.headingText}</p>
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
