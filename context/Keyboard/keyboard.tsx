import React, { Context, createContext, useContext, useState } from "react";
import { keyboardType } from "../../types/keyboard/keyboardType";

const KeyboardContext: Context<keyboardType> = createContext(null);

export const KeyboardProvider = ({ children }) => {
  const [key, setKey] = useState(null);

  const currentKey = () => {
    return key;
  };

  const setCurrentKey = (key: string) => {
    setKey(key);
  };
  return (
    <KeyboardContext.Provider value={{ currentKey, setCurrentKey, key }}>
      {children}
    </KeyboardContext.Provider>
  );
};
export const KeyboardConsumer = KeyboardContext.Consumer;
export const useKeyboard = () => useContext(KeyboardContext) as keyboardType;
