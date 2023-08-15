import React from "react";
import { BiLogoGithub, BiLinkExternal } from "react-icons/bi";

const GitHub = () => {
  return (
    <div className="relative flex flex-col bg-palegray text-trueorange min-h-full items-center text-7xl justify-center mx-auto">
        <div className="absolute top-5 right-5 text-gray-500 text-sm"><BiLinkExternal/></div>
      <BiLogoGithub />
    </div>
  );
};

export default GitHub;
