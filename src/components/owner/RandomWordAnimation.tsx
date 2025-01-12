import React, { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  velocity?: number;
};
const LETTERS = "abcdefghijklmnñopqrstuvwxyz";
export const RandomWordAnimation: React.FC<Props> = ({
  text,
  velocity = 2000,
}) => {
  const [textState, setTextState] = useState("");
  const iterations = useRef(0);
  const div = useRef(null);
  useEffect(() => {
    if (div) {
      setTimeout(() => {
        const intervalID = setInterval(() => {
          (div.current as unknown as HTMLDivElement).innerText = (
            div.current as unknown as HTMLDivElement
          ).innerText
            .split("")
            .map((_, i) => {
              if (i <= iterations.current) {
                return text[i];
              } else {
                return LETTERS[Math.floor(Math.random() * LETTERS.length)];
              }
            })
            .join("");

          if (Math.floor(iterations.current) === (text.length as number) - 1) {
            clearInterval(intervalID);
            setTextState((div.current as unknown as HTMLDivElement).innerText);
          }
          iterations.current += 1 / 3;
        }, velocity / (text.length / (1 / 3)));
      }, 200);
    }
  }, []);
  return (
    <div
      ref={div}
      className="md:text-9xl text-6xl text-gray-50 animate-[open_3.4s_ease-in-out] font-[Yellowtail] relative"
      style={{
        textShadow:
          " 0 0 7px #f9fafb,0 0 10px #f9fafb,0 0 21px #f9fafb,0 0 42px #5271ff,0 0 82px #5271ff,0 0 92px #5271ff,0 0 102px #5271ff,0 0 151px #5271ff ",
      }}
    >
      {!textState
        ? text
            .split("")
            .map(() => LETTERS[Math.floor(Math.random() * LETTERS.length)])
            .join("")
        : textState}
    </div>
  );
};
