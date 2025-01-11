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
  const [textState, setTextState] = useState<string>(
    text
      .split("")
      .map(() => LETTERS[Math.floor(Math.random() * LETTERS.length)])
      .join("")
  );
  const iterations = useRef(0);
  useEffect(() => {
    const intervalID = setInterval(() => {
      const aux = text;

      setTextState(
        aux
          .split("")
          .map((e, i) => {
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
      iterations.current += 1 / 2;
    }, velocity / (text.length / (1 / 2)));
  }, []);
  return <div className="text-4xl font-bold text-white">{textState}</div>;
};
