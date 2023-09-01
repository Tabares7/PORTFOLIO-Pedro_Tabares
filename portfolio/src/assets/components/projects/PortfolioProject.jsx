import React from "react";
import portfolio from "../../img/portfolio-ss.png";
import {BiRightArrowAlt} from "react-icons/bi"
import { Link } from "react-router-dom";

const PortfolioProject = () => {
  return (
   <Link to="https://github.com/Tabares7/PORTFOLIO-Pedro_Tabares">
     <div
      className="h-full relative  padre  bg-center bg-cover cursor-pointer"
      style={{ backgroundImage: `url(${portfolio})` }}
    >
        <div className="duration-150 absolute z-10 bg-gradient-to-t from-black md:via-90%   via-gray-900 to-transparent w-full h-full opacity-80 hover:opacity-95 md:via-transparent">        
        </div>
        <div className="duration-150 absolute text-white bottom-2 hijo left-2 z-20 p-2  md:left-5 md:p-4 md:-bottom-52">
        <h2 className=" font-bold tracking-wide md:text-4xl md:mb-3">🎓 My own Portfolio</h2>
        <p className="text-sm md:text-xl ">Portfolio built with React and JavaScript, styled with Tailwind. Check it out!</p>
        </div>
        <div className="absolute top-5 right-5  text-white md:text-2xl text-lg"><BiRightArrowAlt/></div>
    </div>
   </Link>
  );
};

export default PortfolioProject;
