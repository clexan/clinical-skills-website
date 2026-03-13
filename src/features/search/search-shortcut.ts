function isApplePlatform() {
  if (typeof navigator === "undefined") {
    return false;
  }

  const platform =
    navigator.userAgentData?.platform ?? navigator.platform ?? navigator.userAgent ?? "";

  return /mac|iphone|ipad|ipod/i.test(platform);
}

export function getSearchShortcutLabel() {
  return isApplePlatform() ? "⌘K" : "Ctrl K";
}
