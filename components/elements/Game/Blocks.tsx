import React, { useEffect, useState } from "react";
import { useKeyboard } from "../../../context/Keyboard/keyboard";

export const Blocks = () => {
  let initialLetters = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ];

  //TODO Move this into Keyboard and add Letters to context

  const [letters, setLetters] = useState(initialLetters);
  const [currentLetters, setCurrentLetters] = useState(initialLetters);
  const [index, setIndex] = useState(0);

  const handleKeyPress = (key) => {
    const newArray = [...letters];
    newArray[0][1] = key;
    setLetters(newArray);
    console.log("array", newArray);
    console.log("oldArray", letters);
  };

  const { setCurrentKey, key } = useKeyboard();

  useEffect(() => {
    setCurrentLetters(key);
    handleKeyPress(currentLetters);
  }, [key]);

  return (
    <div className="space-y-3 mt-10">
      <div className="flex items-center justify-center gap-3 text-center">
        {letters[0].map((letters, idx) => (
          <div
            key={idx}
            className="w-14 h-14 border-2 rounded-md flex items-center justify-center"
          >
            <span className="text-xl ">{letters}</span>
          </div>
        ))}
      </div>
      {/* <div onClick={() => handleKeyPress(currentLetters)}>Test</div> */}
      <div className="flex items-center justify-center gap-3 text-center">
        <div className="w-14 h-14 border-2 rounded-md flex items-center justify-center">
          <span className="text-xl ">e</span>
        </div>
        <div className="w-14 h-14 border-2 rounded-md flex items-center justify-center">
          <span className="text-xl ">e</span>
        </div>
        <div className="w-14 h-14 border-2 rounded-md flex items-center justify-center">
          <span className="text-xl ">e</span>
        </div>
        <div className="w-14 h-14 border-2 rounded-md flex items-center justify-center">
          <span className="text-xl ">e</span>
        </div>
        <div className="w-14 h-14 border-2 rounded-md flex items-center justify-center">
          <span className="text-xl ">e</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 text-center">
        <div className="w-14 h-14 border-2 rounded-md flex items-center justify-center">
          <span className="text-xl ">e</span>
        </div>
        <div className="w-14 h-14 border-2 rounded-md flex items-center justify-center">
          <span className="text-xl ">e</span>
        </div>
        <div className="w-14 h-14 border-2 rounded-md flex items-center justify-center">
          <span className="text-xl ">e</span>
        </div>
        <div className="w-14 h-14 border-2 rounded-md flex items-center justify-center">
          <span className="text-xl ">e</span>
        </div>
        <div className="w-14 h-14 border-2 rounded-md flex items-center justify-center">
          <span className="text-xl ">e</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 text-center">
        <div className="w-14 h-14 border-2 rounded-md flex items-center justify-center">
          <span className="text-xl ">e</span>
        </div>
        <div className="w-14 h-14 border-2 rounded-md flex items-center justify-center">
          <span className="text-xl ">e</span>
        </div>
        <div className="w-14 h-14 border-2 rounded-md flex items-center justify-center">
          <span className="text-xl ">e</span>
        </div>
        <div className="w-14 h-14 border-2 rounded-md flex items-center justify-center">
          <span className="text-xl ">e</span>
        </div>
        <div className="w-14 h-14 border-2 rounded-md flex items-center justify-center">
          <span className="text-xl ">e</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 text-center">
        <div className="w-14 h-14 border-2 rounded-md flex items-center justify-center">
          <span className="text-xl ">e</span>
        </div>
        <div className="w-14 h-14 border-2 rounded-md flex items-center justify-center">
          <span className="text-xl ">e</span>
        </div>
        <div className="w-14 h-14 border-2 rounded-md flex items-center justify-center">
          <span className="text-xl ">e</span>
        </div>
        <div className="w-14 h-14 border-2 rounded-md flex items-center justify-center">
          <span className="text-xl ">e</span>
        </div>
        <div className="w-14 h-14 border-2 rounded-md flex items-center justify-center">
          <span className="text-xl ">e</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 text-center">
        <div className="w-14 h-14 border-2 rounded-md flex items-center justify-center">
          <span className="text-xl ">e</span>
        </div>
        <div className="w-14 h-14 border-2 rounded-md flex items-center justify-center">
          <span className="text-xl ">e</span>
        </div>
        <div className="w-14 h-14 border-2 rounded-md flex items-center justify-center">
          <span className="text-xl ">e</span>
        </div>
        <div className="w-14 h-14 border-2 rounded-md flex items-center justify-center">
          <span className="text-xl ">e</span>
        </div>
        <div className="w-14 h-14 border-2 rounded-md flex items-center justify-center">
          <span className="text-xl ">e</span>
        </div>
      </div>
    </div>
  );
};
