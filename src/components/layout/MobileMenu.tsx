import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { Link, NavLink } from "react-router-dom";

import { getChaptersForPart } from "@/content/chapter-index";
import { getPartBySlug } from "@/content/parts";
import { hasDistinctChapterNumber } from "@/lib/chapter-display";

import { primaryNavItems } from "./navigation";
import styles from "./MobileMenu.module.css";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  currentPartSlug?: string;
};

function getFocusableElements(container: HTMLElement | null) {
  if (!container) {
    return [] as HTMLElement[];
  }

  return Array.from(
    container.querySelectorAll<HTMLElement>('a, button, [tabindex]:not([tabindex="-1"])'),
  );
}

const NAV_ICONS: Record<string, string> = {
  "/reference": "reference",
  "/videos": "videos",
  "/quiz": "quiz",
};

function NavIcon({ type }: { type: string }) {
  if (type === "reference") {
    return (
      <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 24 24" width="20">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="9" y2="13" />
        <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12.01" y1="17" y2="17" />
      </svg>
    );
  }

  if (type === "videos") {
    return (
      <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 24 24" width="20">
        <polygon points="5 3 19 12 5 21 5 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "quiz") {
    return (
      <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 24 24" width="20">
        <path d="M12 20h9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    );
  }

  return null;
}

export function MobileMenu({ isOpen, onClose, currentPartSlug }: MobileMenuProps) {
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const [chaptersOpen, setChaptersOpen] = useState(false);
  const currentPart = currentPartSlug ? getPartBySlug(currentPartSlug) : null;
  const chapters = currentPart ? getChaptersForPart(currentPart.id, { includeReviews: true }) : [];

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setChaptersOpen(false);
  }, [currentPartSlug, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const drawer = drawerRef.current;
    const [firstFocusable] = getFocusableElements(drawer);
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    if (firstFocusable) {
      firstFocusable.focus();
    } else {
      drawer?.focus();
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [isOpen]);

  const getNavLinkClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = getFocusableElements(drawerRef.current);

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
    } else if (!event.shiftKey && activeElement === lastFocusable) {
      event.preventDefault();
      firstFocusable.focus();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div aria-hidden="true" className={styles.backdrop} onClick={onClose} />

      <div
        aria-label="Navigation menu"
        aria-modal="true"
        className={styles.drawer}
        id="mobile-menu"
        onKeyDown={handleKeyDown}
        ref={drawerRef}
        role="dialog"
        tabIndex={-1}
      >
        <div aria-hidden="true" className={styles.handle} />

        <div className={styles.sheetHeader}>
          <span className={styles.sheetTitle}>Menu</span>
          <button aria-label="Close menu" className={styles.closeButton} onClick={onClose} type="button">
            <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 24 24" width="18">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
          </button>
        </div>

        {primaryNavItems.length ? (
          <nav aria-label="Primary" className={styles.primaryNav}>
            {primaryNavItems.map((item) => {
              const iconType = NAV_ICONS[item.to];

              return (
                <NavLink
                  className={getNavLinkClassName}
                  end={item.end}
                  key={item.to}
                  onClick={onClose}
                  to={item.to}
                >
                  {iconType ? (
                    <span className={styles.navIcon}>
                      <NavIcon type={iconType} />
                    </span>
                  ) : null}
                  <span className={styles.navLabel}>{item.label}</span>
                  <svg aria-hidden="true" className={styles.navChevron} fill="none" height="16" viewBox="0 0 24 24" width="16">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </NavLink>
              );
            })}
          </nav>
        ) : null}

        {currentPart ? (
          <section className={styles.partSection}>
            <p className={styles.partLabel}>{currentPart.title}</p>

            <button
              aria-controls="mobile-menu-current-part"
              aria-expanded={chaptersOpen}
              className={styles.accordionButton}
              onClick={() => setChaptersOpen((open) => !open)}
              type="button"
            >
              <span>{currentPart.title}</span>
              <span aria-hidden="true" className={styles.chevron}>
                {chaptersOpen ? "▾" : "▸"}
              </span>
            </button>

            <div
              className={`${styles.chapterList} ${chaptersOpen ? styles.chapterListExpanded : ""}`}
              id="mobile-menu-current-part"
            >
              {chapters.map((chapter) => {
                const showNumber = hasDistinctChapterNumber(chapter);

                return (
                  <Link
                    className={styles.chapterLink}
                    key={chapter.id}
                    onClick={onClose}
                    to={`/chapter/${chapter.slug}`}
                  >
                    {showNumber ? <span className={styles.chapterNumber}>{chapter.number}</span> : null}
                    <span className={showNumber ? styles.chapterTitle : styles.chapterTitleFull}>
                      {chapter.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        ) : null}
      </div>
    </>
  );
}
