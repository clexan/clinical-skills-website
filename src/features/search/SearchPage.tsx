import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { HomePage } from "@/features/home/HomePage";
import { useSearchModal } from "./SearchModalContext";

export function SearchPage() {
  const navigate = useNavigate();
  const { isOpen, openSearch } = useSearchModal();
  const hasRequestedOpenRef = useRef(false);
  const hasOpenedSearchRef = useRef(false);

  useEffect(() => {
    if (hasRequestedOpenRef.current) {
      return;
    }

    hasRequestedOpenRef.current = true;
    openSearch();
  }, [openSearch]);

  useEffect(() => {
    if (isOpen) {
      hasOpenedSearchRef.current = true;
      return;
    }

    if (hasOpenedSearchRef.current) {
      navigate("/", { replace: true });
    }
  }, [isOpen, navigate]);

  return <HomePage />;
}
