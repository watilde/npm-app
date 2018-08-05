// @flow
import type { Path, Package, Action } from "./types";

export const loadPackagePath = (path: Path): Action => {
  return {
    type: "LOAD_PACKAGE_PATH",
    path
  };
};

export const loadPackage = (package: Package): Action => {
  return {
    type: "LOAD_PACKAGE",
    package
  };
};

export default {
  loadPackagePath,
  loadPackage
};
