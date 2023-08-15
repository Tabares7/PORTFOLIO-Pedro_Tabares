import React from "react";

import { BiLogoInstagram, BiLinkExternal } from "react-icons/bi";

const Instagram = () => {
  return (
    <a href="" target="_blank">
      <div className="relative flex flex-col bg-darkgrenn text-lightgreen min-h-full items-center text-9xl justify-center mx-auto">
        <div className="absolute top-5 right-5 text-gray-500 text-sm">
          <BiLinkExternal />
        </div>
        <BiLogoInstagram />
      </div>
    </a>
  );
};

export default Instagram;
