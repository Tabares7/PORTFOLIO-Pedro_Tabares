import React from "react";
import Welcome from "./Welcome";
import GitHub from "./GitHub";
import Behance from "./Behance";
import AgeComponent from "./AgeComponent";
import Instagram from "./Instagram";
import { DevProjects } from "./DevProjects";
import ArtProjects from "./ArtProjects";
import Lang from "./Lang";
import Skills from "./Skills";
import Bot from "./Bot";
import Mail from "./Mail";
import yo from "../img/profile.png";
import MapWithBubble from "./Ubicacion";

const PortfolioGrid = () => {
  return (
    <div className="lg:w-4/5 mx-auto w-full p-5">
      <div className="grid md:grid-cols-4 md:grid-rows-5 gap-3 min-h-[1500px] md:min-h-[1300px]   grid-cols-2 grid-rows-8">
        <div className="md:col-span-3  overflow-hidden col-span-2 row-span-2 rounded-lg shadow-lg shadow-gray-900">
          <Welcome />
        </div>
        <div className=" md:col-start-4 md:row-start-1 overflow-hidden min-h-[180px] rounded-lg shadow-lg shadow-gray-900 ">
          <GitHub />
        </div>
        <div className=" md:col-start-4 md:row-start-2 overflow-hidden rounded-lg shadow-lg shadow-gray-900 ">
          <Behance />
        </div>
        <div className=" overflow-hidden rounded-lg shadow-lg shadow-gray-900 ">
          <AgeComponent />
        </div>
        <div className="overflow-hidden min-h-[180px] rounded-lg shadow-lg shadow-gray-900 ">
          <Instagram />
        </div>
        <div className="overflow-hidden min-h-[180px] row-start-4 md:row-start-3 md:col-start-3 col-span-2 rounded-lg shadow-lg shadow-gray-900 ">
          <DevProjects />
        </div>
        <div className=" overflow-hidden min-h-[180px] col-span-2 md:col-span-2 rounded-lg shadow-lg shadow-gray-900 ">
          <ArtProjects />
        </div>
        <div className=" overflow-hidden rounded-lg shadow-lg shadow-gray-900  ">
          <Skills />
        </div>
        <div className=" overflow-hidden min-h-[180px] rounded-lg shadow-lg shadow-gray-900 ">
          <Lang />
        </div>
        <div className=" overflow-hidden rounded-lg shadow-lg shadow-gray-900 ">
          <Bot />
        </div>
        <div className=" overflow-hidden col-span-2 max-h-64   rounded-lg shadow-lg shadow-gray-900  ">
          <MapWithBubble photoUrl={yo} location="Dallas, Texas" />
        </div>
        <div className="overflow-hidden min-h-[180px] col-start-2 row-start-7 md:row-start-5 md:col-start-4 rounded-lg shadow-lg shadow-gray-900">
          <Mail />
        </div>
      </div>
    </div>
  );
};

export default PortfolioGrid;
