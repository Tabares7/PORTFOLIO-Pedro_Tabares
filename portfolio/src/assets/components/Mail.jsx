import React from "react";
import { BiLogoGmail, BiLinkExternal } from "react-icons/bi";

const Mail = () => {
  return (
    <a href="mailto:piterwork7@gmail.com">
      <div className="relative flex flex-col md:bg-lightgreen md:text-darkgrenn bg-darkgrenn text-lightgreen min-h-full items-center text-9xl justify-center mx-auto">
        <div className="absolute top-5 right-5 text-gray-500 text-sm">
          <BiLinkExternal />
        </div>
        <BiLogoGmail />
      </div>
    </a>
  );
};

export default Mail;
