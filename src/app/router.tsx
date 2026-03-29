import { createBrowserRouter, Navigate } from "react-router-dom";

import { AppErrorPage } from "@/app/AppErrorPage";
import { RootLayout } from "@/app/layouts/RootLayout";
import { ChapterPage } from "@/features/chapter/ChapterPage";
import { CreditsPage } from "@/features/credits/CreditsPage";
import { HomePage } from "@/features/home/HomePage";
import { PartPage } from "@/features/part/PartPage";
import { EmergencyReferencePage } from "@/features/reference/EmergencyReferencePage";
import { SearchPage } from "@/features/search/SearchPage";
import { NotFoundPage } from "@/features/status/NotFoundPage";
import { VideoIndexPage } from "@/features/videos/VideoIndexPage";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <AppErrorPage />,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "contents",
        element: <Navigate replace to="/" />,
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
        path: "reference",
        element: <EmergencyReferencePage />,
      },
      {
        path: "videos",
        element: <VideoIndexPage />,
      },
      {
        path: "credits",
        element: <CreditsPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
