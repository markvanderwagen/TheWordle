import React from "react";
import { useKeyboard } from "../../../context/Keyboard/keyboard";

export const Keyboard = () => {
  const rowOne = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const rowTwo = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const rowThree = ["enter", "Z", "X", "C", "V", "B", "N", "M", "delete"];

  const { setCurrentKey, key } = useKeyboard();
  return (
    <div className="">
      <div className="flex gap-1 justify-center ">
        {rowOne.map((e, idx) => {
          return (
            <div
              key={idx}
              className="flex border-2 gap-3 rounded-md w-8 md:w-12 h-20 md:h-10 justify-center"
              onClick={() => setCurrentKey(e)}
            >
              <div
                className="flex flex-col justify-center text-center p-2"
                key={idx}
              >
                <span className="text-center">{e}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-1 justify-center py-2">
        {rowTwo.map((e, idx) => {
          return (
            <div
              key={idx}
              className="flex border-2 gap-3 rounded-md w-8 md:w-12 h-20 md:h-10 justify-center"
              onClick={() => setCurrentKey(e)}
            >
              <div
                className="flex flex-col justify-center text-center p-2"
                key={idx}
              >
                <span className="text-center">{e}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center gap-1">
        {rowThree.map((e, idx) => {
          if (e === "enter") {
            return (
              <div
                key={idx}
                className="flex border-2 gap-3 rounded-md w-12 md:w-20 h-20 md:h-10 justify-center"
                onClick={() => setCurrentKey(e)}
              >
                <div
                  className="flex flex-col justify-center text-center p-2"
                  key={idx}
                >
                  <span className="text-center text-sm">Enter</span>
                </div>
              </div>
            );
          } else if (e === "delete") {
            return (
              <div
                key={idx}
                className="flex border-2 gap-3 rounded-md w-12 md:w-20 h-20 md:h-10 justify-center"
                onClick={() => console.log(key)}
              >
                <div
                  className="flex flex-col justify-center text-center p-2"
                  key={idx}
                >
                  <span className="text-center text-sm">Del</span>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={idx}
                className="flex border-2 gap-3 rounded-md w-8 md:w-12 h-20 md:h-10 justify-center"
                onClick={() => setCurrentKey(e)}
              >
                <div
                  className="flex flex-col justify-center text-center p-2"
                  key={idx}
                >
                  <span className="text-center">{e}</span>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
