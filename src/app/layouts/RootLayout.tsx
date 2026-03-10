import { useEffect, useRef, useState } from "react";
import { Outlet, matchPath, useLocation } from "react-router-dom";

import { Header } from "@/components/layout/Header";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { chapterIndex } from "@/content/chapter-index";
import { getPartById } from "@/content/parts";

import styles from "./RootLayout.module.css";

export function RootLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const shellRef = useRef<HTMLDivElement | null>(null);

  const partMatch = matchPath("/part/:partSlug", location.pathname);
  const chapterMatch = matchPath("/chapter/:chapterSlug", location.pathname);
  const matchedChapter = chapterMatch
    ? chapterIndex.find((chapter) => chapter.slug === chapterMatch.params.chapterSlug)
    : undefined;
  const parentPartSlug = matchedChapter ? getPartById(matchedChapter.partId)?.slug : undefined;
  const currentPartSlug = partMatch?.params.partSlug ?? parentPartSlug ?? undefined;

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const shell = shellRef.current;

    if (!shell) {
      return;
    }

    if (menuOpen) {
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
  }, [menuOpen]);

  return (
    <>
      <div className={styles.shell} ref={shellRef}>
        <Header menuOpen={menuOpen} onMenuOpen={() => setMenuOpen(true)} />

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
    </>
  );
}
