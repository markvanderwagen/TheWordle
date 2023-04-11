import React from "react";
import { KeyboardProvider } from "./Keyboard/keyboard";

export default function DataProvider({ children }) {
  return (
    //TODO: include all your contexts in this file. It wraps the app.
    <KeyboardProvider>{children}</KeyboardProvider>
  );
}
