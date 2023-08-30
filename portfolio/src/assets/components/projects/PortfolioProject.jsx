import React from "react";
import portfolio from "../../img/portfolio-ss.png";

const PortfolioProject = () => {
  return (
    <div
      className="h-full relative bg-center bg-cover cursor-pointer"
      style={{ backgroundImage: `url(${portfolio})` }}
    >
        <div className="absolute z-10 bg-gradient-to-t from-darkgrenn via-green-800 to-transparent w-full h-full opacity-80">        
        </div>
        <h2 className="absolute text-white bottom-4 left-4 z-20 font-bold tracking-wide"> My own portfolio</h2>
    </div>
  );
};

export default PortfolioProject;
