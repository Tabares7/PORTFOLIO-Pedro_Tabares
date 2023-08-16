import React, { useState, useEffect } from "react";
import { BiLogoGithub, BiLinkExternal } from "react-icons/bi";

const GitHub = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <a href="https://github.com/Tabares7" target="_blank">
      <div className="relative flex flex-col bg-palegray text-trueorange min-h-full items-center text-9xl justify-center mx-auto">
        <div className="absolute top-5 right-5 text-gray-500 text-sm">
          <BiLinkExternal />
        </div>
        <div
          className={`absolute transition-transform duration-500 ${
            isVisible
              ? "translate-x-0  opacity-100"
              : "translate-x-96  opacity-0"
          }`}
        >
          <BiLogoGithub />
        </div>
        <div className={`absolute text-center  p-10 text-2xl  font-extrabold transition-transform duration-500  ${isVisible ? '-translate-x-96 opacity-0' : 'translate-x-0 opacity-100'}`}>
        Check out my Github!
      </div>
      </div>
    </a>
  );
};

export default GitHub;
