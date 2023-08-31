import React from "react";
import PortfolioProject from "./projects/PortfolioProject";
import NewsletterProject from "./projects/NewsletterProject";
import ClinicProject from "./projects/ClinicaProject";
import AdviceGeneratorProject from "./projects/AdviceGeneratorProject";
import CesarEncoderProject from "./projects/CesarEncoderProject";
import QRCodeProject from "./projects/QRCodeProject";
import DesignCoreProject from "./projects/DesignCoreProject";
import SummaryProject from "./projects/SummaryProject";

const DevProjectsGrid = () => {
  return (
    <div className="lg:w-4/5 mx-auto w-full p-5">
      <div className="grid grid-cols-2 grid-rows-8 gap-4">
        <div className="col-span-2 row-span-1 bg-gray-100 text-black min-h-[180px] rounded-lg shadow-lg shadow-gray-400 overflow-hidden md:min-h-[600px]">
          <PortfolioProject/>
        </div>
        <div className="col-span-2 row-span-1 bg-gray-100 text-black min-h-[180px] rounded-lg shadow-lg shadow-gray-400 overflow-hidden md:min-h-[600px] md:col-span-1 md:row-span-1">
          <NewsletterProject/>
        </div>
        <div className="col-span-1 row-span-2 bg-gray-100 text-black min-h-[360px] rounded-lg shadow-lg shadow-gray-400 overflow-hidden md:min-h-[600px]">
          <ClinicProject/>
        </div>
        <div className="col-span-1 row-span-2 bg-gray-100 text-black min-h-[360px] rounded-lg shadow-lg shadow-gray-400 overflow-hidden md:min-h-[600px]">
          <AdviceGeneratorProject/>
        </div>
        <div className="col-span-2 row-span-1 bg-gray-100 text-black min-h-[180px] rounded-lg shadow-lg shadow-gray-400 overflow-hidden md:min-h-[600px]">
          <CesarEncoderProject/>
        </div>
        <div className="col-span-1 row-span-2 bg-gray-100 text-black min-h-[360px] rounded-lg shadow-lg shadow-gray-400 overflow-hidden md:min-h-[600px]">
          <QRCodeProject/>
        </div>
        <div className="col-span-1 row-span-2 bg-gray-100 text-black min-h-[360px] rounded-lg shadow-lg shadow-gray-400 overflow-hidden md:min-h-[600px]">
          <DesignCoreProject/>
        </div>
        <div className="col-span-2 row-span-1 bg-gray-100 text-black min-h-[180px] rounded-lg shadow-lg shadow-gray-400 overflow-hidden md:min-h-[600px]">
          <SummaryProject/>
        </div>
      </div>
    </div>
  );
};

export default DevProjectsGrid;
