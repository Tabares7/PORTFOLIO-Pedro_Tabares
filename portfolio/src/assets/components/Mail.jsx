import React, { useState, useEffect } from "react";
import { BiLogoGmail, BiLinkExternal } from "react-icons/bi";

const Mail = () => {
   const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <a href="mailto:piterwork7@gmail.com">
      <div className="relative flex flex-col md:bg-lightgreen md:text-darkgrenn bg-darkgrenn text-lightgreen min-h-full items-center text-9xl justify-center mx-auto md:hover:bg-lightgreenV">
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

        <BiLogoGmail />
        </div>
         <div className={`absolute text-center  p-10 text-2xl  font-extrabold transition-transform duration-500  ${isVisible ? '-translate-x-96 opacity-0' : 'translate-x-0 opacity-100'}`}>
        Send me an eMail!
      </div>
      </div>
    </a>
  );
};



export default Mail;
