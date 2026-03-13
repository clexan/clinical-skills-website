import { useEffect, useRef, useState } from "react";
import { Outlet, matchPath, useLocation } from "react-router-dom";

import { Header } from "@/components/layout/Header";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { chapterIndex } from "@/content/chapter-index";
import { getPartById } from "@/content/parts";
import { SearchModal } from "@/features/search/SearchModal";
import { preloadSearchExperience } from "@/features/search/search-loader";
import { SearchModalProvider, useSearchModal, useSearchShortcut } from "@/features/search/SearchModalContext";

import styles from "./RootLayout.module.css";

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
  const matchedChapter = chapterMatch
    ? chapterIndex.find((chapter) => chapter.slug === chapterMatch.params.chapterSlug)
    : undefined;
  const parentPartSlug = matchedChapter ? getPartById(matchedChapter.partId)?.slug : undefined;
  const currentPartSlug = partMatch?.params.partSlug ?? parentPartSlug ?? undefined;
  const shellBlocked = menuOpen || searchOpen;

  useSearchShortcut(toggleSearch);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

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

  return (
    <>
      <div className={styles.shell} ref={shellRef}>
        <Header
          menuOpen={menuOpen}
          onMenuOpen={() => setMenuOpen(true)}
          onSearchOpen={openSearch}
          onSearchWarmup={() => {
            void preloadSearchExperience();
          }}
        />

        <main className={styles.main}>
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
