export type PrimaryNavItem = {
  label: string;
  to: string;
  end?: boolean;
};

export const primaryNavItems: readonly PrimaryNavItem[] = [
  {
    label: "Emergency Reference",
    to: "/reference",
  },
  {
    label: "Videos",
    to: "/videos",
  },
  {
    label: "Quiz",
    to: "/quiz",
  },
];
