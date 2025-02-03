import React, { useEffect, useRef } from "react";

type Props = {
  text: string;
};

function animation(ref: HTMLDivElement, text: string) {
  let index = 0;
  const intervalID = setInterval(() => {
    ref.innerHTML += text[index] || "";
    index++;
    if (index >= text.length) {
      clearInterval(intervalID);
    }
  }, 150);
  return intervalID;
}

export const Writter: React.FC<Props> = ({ text }) => {
  const element = useRef(null);
  const isAnimating = useRef(false);
  useEffect(() => {
    if (element.current && !isAnimating.current) {
      isAnimating.current = true;
      let intervalID: NodeJS.Timeout;
      setTimeout(() => {
        intervalID = animation(element.current!, text);
      }, 1000);
      return () => {
        if (intervalID) {
          clearInterval(intervalID);
        }
      };
    }
  }, []);
  return (
    <div className="flex col relative justify-center">
      <div
        ref={element}
        className="md:text-9xl md:h-[128px] text-6xl h-[60px] text-gray-50"
        style={{
          textShadow:
            " 0 0 7px #f9fafb,0 0 10px #f9fafb,0 0 21px #f9fafb,0 0 42px #5271ff,0 0 82px #5271ff,0 0 92px #5271ff,0 0 102px #5271ff,0 0 151px #5271ff ",
          fontFamily: "Raleway",
        }}
      ></div>
      <div
        className="ml-8 w-1 bg-white animate-[cursorTextAnimation_3s_ease-in-out_forwards] absolute sm:right-[-40px] right-[-20px] top-0 bottom-1"
        style={{
          boxShadow:
            " 0 0 7px #f9fafb,0 0 10px #f9fafb,0 0 21px #f9fafb,0 0 42px #5271ff,0 0 82px #5271ff,0 0 92px #5271ff,0 0 102px #5271ff,0 0 151px #5271ff",
        }}
      ></div>
    </div>
  );
};
