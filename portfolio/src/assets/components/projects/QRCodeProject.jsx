import React from "react";
import portfolio from "../../img/QR-code-ss.png";
import {BiRightArrowAlt} from "react-icons/bi"
import { Link } from "react-router-dom";

const QRCodeProject = () => {
  return (
   <Link to="https://github.com/Tabares7/PORTFOLIO-Pedro_Tabares">
    <div
      className="h-full relative bg-center bg-cover cursor-pointer"
      style={{ backgroundImage: `url(${portfolio})` }}
    >
        <div className="duration-150 absolute z-10 bg-gradient-to-t from-gray-900 via-gray-900   to-transparent w-full h-full opacity-80 hover:opacity-95 md:via-transparent">        
        </div>
        <div className="absolute text-white bottom-2 left-2 z-20 p-2 md:bottom-5 md:left-5 md:p-4">
        <h2 className=" font-bold tracking-wide md:text-5xl md:mb-3">🔗 QR Code</h2>
        <p className="text-sm md:text-xl pr-2">Frontend QR Code Display project: simple, single-page app for QR code presentation.</p>
        </div>
        <div className="absolute top-5 right-5  text-white md:text-2xl text-lg"><BiRightArrowAlt/></div>
    </div>
   </Link>
  );
};

export default QRCodeProject;
