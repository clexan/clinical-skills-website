import { useEffect, useRef, useState } from "react";
import { Outlet, matchPath, useLocation } from "react-router-dom";

import { Header } from "@/components/layout/Header";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { primaryNavItems } from "@/components/layout/navigation";
import { chapterIndex } from "@/content/chapter-index";
import { getPartById, getPartBySlug } from "@/content/parts";
import { SearchModal } from "@/features/search/SearchModal";
import { preloadSearchExperience } from "@/features/search/search-loader";
import { SearchModalProvider, useSearchModal, useSearchShortcut } from "@/features/search/SearchModalContext";
import { getChapterDisplayLabel } from "@/lib/chapter-display";
import { formatDocumentTitle } from "@/lib/document-title";

import styles from "./RootLayout.module.css";

const MAIN_CONTENT_ID = "main-content";

export function RootLayout() {
  return (
    <SearchModalProvider>
      <RootLayoutShell />
    </SearchModalProvider>
  );
}

function canWarmSearchInBackground() {
  if (typeof navigator === "undefined") {
    return false;
  }

  const connection = (navigator as Navigator & {
    connection?: {
      effectiveType?: string;
      saveData?: boolean;
    };
  }).connection;

  if (connection?.saveData) {
    return false;
  }

  return connection?.effectiveType !== "2g" && connection?.effectiveType !== "slow-2g";
}

function RootLayoutShell() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const shellRef = useRef<HTMLDivElement | null>(null);
  const { isOpen: searchOpen, openSearch, toggleSearch } = useSearchModal();

  const partMatch = matchPath("/part/:partSlug", location.pathname);
  const chapterMatch = matchPath("/chapter/:chapterSlug", location.pathname);
  const matchedPart = partMatch?.params.partSlug ? getPartBySlug(partMatch.params.partSlug) : null;
  const matchedChapter = chapterMatch
    ? chapterIndex.find((chapter) => chapter.slug === chapterMatch.params.chapterSlug)
    : undefined;
  const parentPartSlug = matchedChapter ? getPartById(matchedChapter.partId)?.slug : undefined;
  const currentPartSlug = partMatch?.params.partSlug ?? parentPartSlug ?? undefined;
  const showMenuButton = primaryNavItems.length > 0 || Boolean(currentPartSlug);
  const shellBlocked = menuOpen || searchOpen;
  const routeTitle = (() => {
    if (location.pathname === "/") {
      return "Contents";
    }

    if (location.pathname === "/reference") {
      return "Emergency Treatment Reference";
    }

    if (location.pathname === "/search") {
      return "Search";
    }

    if (location.pathname === "/credits") {
      return "Credits";
    }

    if (matchedChapter) {
      const chapterPart = getPartById(matchedChapter.partId);

      if (matchedChapter.kind === "review" && chapterPart) {
        return `Part ${chapterPart.position} Review`;
      }

      return getChapterDisplayLabel(matchedChapter);
    }

    if (chapterMatch) {
      return "Chapter unavailable";
    }

    if (matchedPart) {
      return `Part ${matchedPart.position} · ${matchedPart.title}`;
    }

    if (partMatch) {
      return "Part unavailable";
    }

    return "Page unavailable";
  })();

  useSearchShortcut(toggleSearch);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.title = formatDocumentTitle(routeTitle);
  }, [routeTitle]);

  useEffect(() => {
    if (!canWarmSearchInBackground()) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      void preloadSearchExperience();
    }, 900);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const shell = shellRef.current;

    if (!shell) {
      return;
    }

    if (shellBlocked) {
      shell.setAttribute("inert", "");
      shell.setAttribute("aria-hidden", "true");
    } else {
      shell.removeAttribute("inert");
      shell.removeAttribute("aria-hidden");
    }

    return () => {
      shell.removeAttribute("inert");
      shell.removeAttribute("aria-hidden");
    };
  }, [shellBlocked]);

  const handleSkipToContent = () => {
    const main = document.getElementById(MAIN_CONTENT_ID);

    if (!(main instanceof HTMLElement)) {
      return;
    }

    main.focus();
    main.scrollIntoView({ block: "start" });
  };

  return (
    <>
      <div className={styles.shell} ref={shellRef}>
        <a className={styles.skipLink} href={`#${MAIN_CONTENT_ID}`} onClick={handleSkipToContent}>
          Skip to content
        </a>

        <Header
          menuOpen={menuOpen}
          showMenuButton={showMenuButton}
          onMenuOpen={() => setMenuOpen(true)}
          onSearchOpen={openSearch}
          onSearchWarmup={() => {
            void preloadSearchExperience();
          }}
        />

        <main className={styles.main} id={MAIN_CONTENT_ID} tabIndex={-1}>
          <div className="container">
            <Outlet />
          </div>
        </main>

        <footer className={styles.footer}>
          <div className={`container ${styles.footerInner}`}>
            <p className={styles.footerCopy}>Clinical Skills Handbook</p>
          </div>
        </footer>
      </div>

      <MobileMenu
        currentPartSlug={currentPartSlug}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
      <SearchModal />
    </>
  );
}
