import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface SearchModalContextValue {
  isOpen: boolean;
  initialQuery: string;
  openSearch: (initialQuery?: string) => void;
  closeSearch: () => void;
  toggleSearch: () => void;
}

const SearchModalContext = createContext<SearchModalContextValue | null>(null);

export function SearchModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState("");

  return (
    <SearchModalContext.Provider
      value={{
        isOpen,
        initialQuery,
        openSearch: (query = "") => {
          setInitialQuery(query);
          setIsOpen(true);
        },
        closeSearch: () => {
          setIsOpen(false);
          setInitialQuery("");
        },
        toggleSearch: () =>
          setIsOpen((open) => {
            if (open) {
              setInitialQuery("");
            }

            return !open;
          }),
      }}
    >
      {children}
    </SearchModalContext.Provider>
  );
}

export function useSearchModal() {
  const context = useContext(SearchModalContext);

  if (!context) {
    throw new Error("useSearchModal must be used within SearchModalProvider");
  }

  return context;
}

export function useSearchShortcut(toggleSearch: () => void) {
  const toggleRef = useRef(toggleSearch);

  useEffect(() => {
    toggleRef.current = toggleSearch;
  }, [toggleSearch]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.isComposing || event.repeat) {
        return;
      }

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        toggleRef.current();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}
