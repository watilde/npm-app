// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from "redux";

export type Path = string;

export type Package = {
  +name: Text: string,
  +version: string
};

export type packageState = {
  +path: Path
  +package: Package
};

export type Action =
  | { type: "LOAD_PACKAGE_PATH", +path: PATH }
  | { type: "LOAD_PACKAGE", +package: Package };

export type Store = ReduxStore<packageState, Action>;

export type Dispatch = ReduxDispatch<Action>;
