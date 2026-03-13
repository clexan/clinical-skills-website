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
        <div className={styles.closeRow}>
          <button aria-label="Close menu" className={styles.closeButton} onClick={onClose} type="button">
            ×
          </button>
        </div>

        <nav aria-label="Primary" className={styles.primaryNav}>
          {primaryNavItems.map((item) => (
            <NavLink
              className={getNavLinkClassName}
              end={item.end}
              key={item.to}
              onClick={onClose}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

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
