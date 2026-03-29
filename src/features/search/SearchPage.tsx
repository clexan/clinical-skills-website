import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { HomePage } from "@/features/home/HomePage";
import { useSearchModal } from "./SearchModalContext";

export function SearchPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { isOpen, openSearch } = useSearchModal();
  const requestedQueryRef = useRef<string | null>(null);
  const hasOpenedSearchRef = useRef(false);
  const requestedQuery = searchParams.get("q")?.trim() ?? "";

  useEffect(() => {
    if (requestedQueryRef.current === requestedQuery) {
      return;
    }

    requestedQueryRef.current = requestedQuery;
    openSearch(requestedQuery);
  }, [openSearch, requestedQuery]);

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
