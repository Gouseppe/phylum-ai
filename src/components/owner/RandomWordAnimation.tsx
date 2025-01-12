import React, { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  velocity?: number;
};
const LETTERS = "abcdefghijklmnñopqrstuvwxyz";
export const RandomWordAnimation: React.FC<Props> = ({
  text,
  velocity = 4000,
}) => {
  const [textState, setTextState] = useState("");
  const iterations = useRef(0);
  useEffect(() => {
    const intervalID = setInterval(() => {
      setTextState(
        text
          .split("")
          .map((_, i) => {
            if (i < iterations.current) {
              return text[i];
            } else {
              return LETTERS[Math.floor(Math.random() * LETTERS.length)];
            }
          })
          .join("")
      );
      if (Math.floor(iterations.current) === (text.length as number) - 1) {
        clearInterval(intervalID);
      }
      iterations.current += 1 / 4;
    }, velocity / (text.length / (1 / 4)));
  }, []);
  return (
    <div
      className="md:text-9xl text-6xl text-gray-50 animate-[open_4s_ease-in-out] font-[Yellowtail] relative"
      style={{
        textShadow:
          " 0 0 7px #f9fafb,0 0 10px #f9fafb,0 0 21px #f9fafb,0 0 42px #5271ff,0 0 82px #5271ff,0 0 92px #5271ff,0 0 102px #5271ff,0 0 151px #5271ff ",
      }}
    >
      {textState}
    </div>
  );
};
