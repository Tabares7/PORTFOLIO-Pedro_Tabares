import React, {useEffect, useState} from "react";

import { BiLogoInstagram, BiLinkExternal } from "react-icons/bi";

const Instagram = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <a
      href="https://www.instagram.com/piterwxrk/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
      target="_blank"
    >
      <div className="relative flex flex-col bg-darkgrenn text-lightgreen min-h-full items-center text-9xl justify-center mx-auto hover:bg-darkgrennV">
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
        <BiLogoInstagram />
        </div>
         <div className={`absolute text-center  p-10 text-2xl  font-extrabold transition-transform duration-500  ${isVisible ? '-translate-x-96 opacity-0' : 'translate-x-0 opacity-100'}`}>
         Join me on Instagram!
      </div>
      </div>
    </a>
  );
};

export default Instagram;
