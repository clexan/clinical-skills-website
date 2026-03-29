import { createBrowserRouter } from "react-router-dom";

import { AppErrorPage } from "@/app/AppErrorPage";
import { RootLayout } from "@/app/layouts/RootLayout";
import { ChapterPage } from "@/features/chapter/ChapterPage";
import { ContentsPage } from "@/features/contents/ContentsPage";
import { CreditsPage } from "@/features/credits/CreditsPage";
import { FinalPrepIndexPage } from "@/features/final-prep/FinalPrepIndexPage";
import { FinalPrepPage } from "@/features/final-prep/FinalPrepPage";
import { HomePage } from "@/features/home/HomePage";
import { PartPage } from "@/features/part/PartPage";
import { PracticalsIndexPage } from "@/features/practical/PracticalsIndexPage";
import { PracticalPage } from "@/features/practical/PracticalPage";
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
        element: <ContentsPage />,
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
        path: "practicals",
        element: <PracticalsIndexPage />,
      },
      {
        path: "practical/:practicalSlug",
        element: <PracticalPage />,
      },
      {
        path: "final-prep",
        element: <FinalPrepIndexPage />,
      },
      {
        path: "final-prep/:topicSlug",
        element: <FinalPrepPage />,
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
