import React from "react";
import { BiLogoGithub, BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";

const GitHub = () => {
  return (
    <a href="https://github.com/Tabares7" target="_blank">
      <div className="relative flex flex-col bg-palegray text-trueorange min-h-full items-center text-9xl justify-center mx-auto">
        <div className="absolute top-5 right-5 text-gray-500 text-sm">
          <BiLinkExternal />
        </div>
        <BiLogoGithub />
      </div>
    </a>
  );
};

export default GitHub;
