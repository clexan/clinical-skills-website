import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSearchModal } from "./SearchModalContext";

export function SearchPage() {
  const navigate = useNavigate();
  const { openSearch } = useSearchModal();

  useEffect(() => {
    openSearch();
    navigate("/", { replace: true });
  }, [navigate, openSearch]);

  return null;
}
