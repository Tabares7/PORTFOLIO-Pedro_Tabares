import React from "react";
import PortfolioProject from "./projects/PortfolioProject";

const DevProjectsGrid = () => {
  return (
    <div className="lg:w-4/5 mx-auto w-full p-5">
      <div className="grid grid-cols-2 grid-rows-8 gap-4 ">
        <div className="col-span-2 row-span-1 bg-gray-100 text-black min-h-[180px]">
          <PortfolioProject/>
        </div>
        <div className="col-span-2 row-span-1 bg-gray-100 text-black min-h-[180px]">
          Hola mundo
        </div>
        <div className="col-span-1 row-span-2 bg-gray-100 text-black min-h-[360px] ">
          Hola mundo
        </div>
        <div className="col-span-1 row-span-2 bg-gray-100 text-black min-h-[360px] ">
          Hola mundo
        </div>
      </div>
    </div>
  );
};

export default DevProjectsGrid;
