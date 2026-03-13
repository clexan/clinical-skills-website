let searchModulePromise: Promise<typeof import("./search")> | null = null;

export function loadSearchModule() {
  searchModulePromise ??= import("./search");

  return searchModulePromise;
}

export function preloadSearchExperience() {
  return loadSearchModule().then(async (module) => {
    await module.prepareHandbookSearch();

    return module;
  });
}
