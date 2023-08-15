import React from "react";
import { BiLogoBehance, BiLinkExternal } from "react-icons/bi";

const Behance = () => {
  return (
    <a href="https://www.behance.net/pedrotabares7" target="_blank">
      <div className="relative flex flex-col bg-trueorange text-palegray min-h-full items-center text-9xl justify-center mx-auto">
        <div className="absolute top-5 right-5 text-gray-500 text-sm">
          <BiLinkExternal />
        </div>
        <BiLogoBehance />
      </div>
    </a>
  );
};

export default Behance;
