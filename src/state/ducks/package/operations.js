// @flow
import actions from "./actions";
import type { Path, Package, Action } from "./types";

const loadPackagePath = (path: Path): Action => {
  return actions.loadPackagePath(path);
};

const loadPackage = (package: Package): Action => {
  return actions.loadPackage(package);
};

export default {
  loadPackage,
  loadPackagePath
};
