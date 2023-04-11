import { Dispatch, SetStateAction } from "react";

export type keyboardType = {
  currentKey: () => void;
  setCurrentKey: (key: string) => void;
  key;
};
