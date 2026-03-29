export type PrimaryNavItem = {
  label: string;
  to: string;
  end?: boolean;
};

export const primaryNavItems: readonly PrimaryNavItem[] = [
  {
    label: "Handbook",
    to: "/contents",
  },
  {
    label: "Practical Prep",
    to: "/practicals",
  },
  {
    label: "Final Prep",
    to: "/final-prep",
  },
  {
    label: "Emergency Reference",
    to: "/reference",
  },
  {
    label: "Videos",
    to: "/videos",
  },
];
