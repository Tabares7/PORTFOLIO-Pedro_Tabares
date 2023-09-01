import React from "react";
import portfolio from "../../img/Designcore-Landing-Page-ss-mobile.png";
import {BiRightArrowAlt} from "react-icons/bi"
import { Link } from "react-router-dom";

const DesignCoreProject = () => {
  return (
   <Link target="_blank" to="https://github.com/Tabares7/learning-sass">
    <div
      className="h-full relative  padre  bg-center bg-cover cursor-pointer"
      style={{ backgroundImage: `url(${portfolio})` }}
    > 
        <div className="duration-150 absolute z-10 bg-gradient-to-t from-black md:via-90%   via-gray-900 to-transparent w-full h-full opacity-80 hover:opacity-95 md:via-transparent">        
        </div>
        <div className="duration-150 absolute text-white bottom-2 hijo left-2 z-20 p-2  md:left-5 md:p-4 md:-bottom-52">
        <h2 className=" font-bold tracking-wide md:text-3xl md:mb-3">🟡 Design Core</h2>
        <p className="text-sm md:text-xl pr-2">Frontend Design Business Landing Page: sleek and modern UI to showcase design services.</p>
        </div>
        <div className="absolute top-5 right-5  text-white md:text-2xl text-lg"><BiRightArrowAlt/></div>
    </div>
   </Link>
  );
};

export default DesignCoreProject;
