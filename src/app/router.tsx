import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "@/app/layouts/RootLayout";
import { ChapterPage } from "@/features/chapter/ChapterPage";
import { CreditsPage } from "@/features/credits/CreditsPage";
import { HomePage } from "@/features/home/HomePage";
import { PartPage } from "@/features/part/PartPage";
import { SearchPage } from "@/features/search/SearchPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "part/:partSlug",
        element: <PartPage />,
      },
      {
        path: "chapter/:chapterSlug",
        element: <ChapterPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "credits",
        element: <CreditsPage />,
      },
    ],
  },
]);
