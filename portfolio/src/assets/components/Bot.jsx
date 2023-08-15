import React from "react";
import { BiBot, BiLinkExternal } from "react-icons/bi";

const Bot = () => {
  return (
    <div className="relative flex flex-col bg-palegray text-trueorange min-h-full items-center text-9xl justify-center mx-auto">
      <div className="absolute top-5 right-5 text-gray-500 text-sm">
        <BiLinkExternal />
      </div>
      <BiBot />
    </div>
  );
};

export default Bot;
