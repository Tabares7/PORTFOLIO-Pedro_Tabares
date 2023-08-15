import React from "react";
import Welcome from "./Welcome";
import GitHub from "./GitHub";
import Behance from "./Behance";
import AgeComponent from "./AgeComponent";
import Instagram from "./Instagram";
import { DevProjects } from "./DevProjects";
import ArtProjects from "./ArtProjects";

const PortfolioGrid = () => {
  return (
    <div className="lg:w-4/5 mx-auto w-full p-5">
      <div className="grid md:grid-cols-4 md:grid-rows-5 gap-3 min-h-[1300px]   grid-cols-2 grid-rows-8">
        <div className="md:col-span-3 md:row-span-2 overflow-hidden col-span-2 row-span-2 rounded-lg">
          <Welcome/>
        </div>
        <div className=" md:col-start-4 md:row-start-1 overflow-hidden rounded-lg">
          <GitHub/>
        </div>
        <div className=" md:col-start-4 md:row-start-2 overflow-hidden rounded-lg">
          <Behance/>
        </div>
        <div className=" overflow-hidden rounded-lg"><AgeComponent/></div>
        <div className="overflow-hidden rounded-lg"><Instagram/></div>
        <div className="bg-red-100 overflow-hidden row-start-4 md:row-start-3 md:col-start-3 col-span-2 rounded-lg">
          <DevProjects/>
        </div>
        <div className="bg-red-100 overflow-hidden col-span-2 md:col-span-2 rounded-lg"><ArtProjects/></div>
        <div className="bg-red-100 overflow-hidden rounded-lg">C8</div>
        <div className="bg-red-100 overflow-hidden rounded-lg">C9</div>
        <div className="bg-red-100 overflow-hidden rounded-lg">C10</div>
        <div className="bg-red-100 overflow-hidden col-span-2 rounded-lg">C11</div>
        <div className="bg-red-100 overflow-hidden col-start-2 row-start-7 md:row-start-5 md:col-start-4 rounded-lg">
          C12
        </div>
      </div>
    </div>
  );
};

export default PortfolioGrid;
