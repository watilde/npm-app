const getDependencies = (package, filter): Package => {
  switch (filter) {
    case "SHOW_DEV_DEPS":
      return package.devDependencies;
    case "SHOW_DEPS":
      return package.dependencies;
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

export default {
  getDependencies
};
