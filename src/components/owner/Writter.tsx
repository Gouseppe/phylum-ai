import React, { useEffect, useRef } from "react";

type Props = {
  text: string;
};
export const Writter: React.FC<Props> = ({ text }) => {
  const element = useRef(null);
  useEffect(() => {
    if (element.current) {
      setTimeout(() => {
        const intervalID = setInterval(() => {
          const ref = element.current as unknown as HTMLDivElement;

          ref.innerHTML += text[ref.innerHTML.length] || "";
          console.log(ref.innerText, text, ref.innerText === text);
          if (ref.innerText === text || ref.innerHTML.length >= text.length) {
            clearInterval(intervalID);
          }
        }, 150);
      }, 1000);
    }
  }, []);
  return (
    <div className="flex col animate-[open_3.4s_ease-in-out]  relative justify-center">
      <div
        ref={element}
        className="md:text-9xl md:h-[128px] text-6xl h-[60px] text-gray-50 font-[Yellowtail]"
        style={{
          textShadow:
            " 0 0 7px #f9fafb,0 0 10px #f9fafb,0 0 21px #f9fafb,0 0 42px #5271ff,0 0 82px #5271ff,0 0 92px #5271ff,0 0 102px #5271ff,0 0 151px #5271ff ",
        }}
      ></div>
      <div
        className="ml-8 w-1 bg-white animate-[cursorTextAnimation_3s_ease-in-out_forwards] absolute right-[-40px] top-0 bottom-1"
        style={{
          boxShadow:
            " 0 0 7px #f9fafb,0 0 10px #f9fafb,0 0 21px #f9fafb,0 0 42px #5271ff,0 0 82px #5271ff,0 0 92px #5271ff,0 0 102px #5271ff,0 0 151px #5271ff",
        }}
      ></div>
    </div>
  );
};
