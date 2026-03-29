import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "@/app/router";

import "./styles/globals.css";

const VITE_PRELOAD_RETRY_KEY = "vite-preload-retried";

window.addEventListener("vite:preloadError", (event) => {
  const preloadEvent = event as Event & { payload?: unknown };

  console.error("Vite preload error while loading lazy assets.", preloadEvent.payload);

  if (window.sessionStorage.getItem(VITE_PRELOAD_RETRY_KEY) === "1") {
    return;
  }

  window.sessionStorage.setItem(VITE_PRELOAD_RETRY_KEY, "1");
  event.preventDefault();
  window.location.reload();
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
