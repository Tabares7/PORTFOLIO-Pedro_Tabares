import React from "react";
import { ProjectTemplate } from "./ProjectTemplate";
import assess101 from "../img/assess101-logo.png";
import assess101IMG from "../img/assess101.png";
import doctor from "../img/doc-pic.png";

const DevProjectsGrid = () => {
  return (
    <div className=" mx-auto w-full p-10 bg-gradient-to-br from-[#1e593e] to-[#0fff83] ">
      <section className="grid gap-3 min-h-[1500px] grid-cols-4 grid-rows-8 md:min-h-[1300px] md:grid-cols-6 md:grid-rows-6">
        <div className="col-span-4 md:col-span-2 row-span-2 bg-[#E3FCF8] rounded-lg flex items-center justify-center p-10">
          <img src={assess101} alt="logo project assess 101" />
        </div>
        <div className="col-span-4 md:col-span-2 row-span-2 bg-[#313B4C] text-[#E3FCF8] rounded-lg p-10">
          <h1 className="text-3xl font-bold mb-10 ">Description</h1>
          <div>
            <p className="">
              An{" "}
              <span className="font-bold">
                innovative fullstack application
              </span>{" "}
              designed for primary care clinics, aimed at centralizing and
              optimizing the medical evaluation process. This tool consolidates
              a wide variety of screening forms into one place, allowing
              healthcare providers to{" "}
              <span className="font-bold">
                generate comprehensive evaluation sessions
              </span>{" "}
              and apply multiple questionnaires efficiently.
            </p>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 row-span-1 bg-[#E3FCF8] rounded-lg flex flex-col justify-center items-center">
          <p className="text-3xl font-bold">AI</p>
          <p className="text-xl">powered</p>
        </div>
        <div className="col-span-2 md:col-span-1 row-span-1 bg-[#313B4C] rounded-lg flex flex-col justify-center items-center p-5">
          <p className="text-xl font-bold text-center text-[#E3FCF8]">
            Form Centralization
          </p>
        </div>
        <div className="col-span-2 md:col-span-1 row-span-1 bg-[#313B4C] text-[#E3FCF8] rounded-lg flex flex-col justify-center items-center p-5">
          <p className="text-xl font-bold text-center">
            Automated Evaluations and Plans
          </p>
        </div>
        <div className="col-span-2 md:col-span-1 row-span-1 bg-[#E3FCF8] rounded-lg flex flex-col justify-center items-center">
          <p className="text-3xl font-bold">AI</p>
          <p className="text-xl">powered</p>
        </div>
        <div className="col-span-4 md:col-span-4 row-span-4 bg-[#E3FCF8] rounded-lg p-10 flex items-center justify-center">
          <img
            src={assess101IMG}
            alt="application screenshot"
            className="rounded-lg"
          />
        </div>
        <div className="col-span-4 md:col-span-2 row-span-4 bg-[#E3FCF8] rounded-lg p-10">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
          <p>
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="col-span-2 md:col-span-1 row-span-2 bg-[#E3FCF8] rounded-lg p-10 flex flex-col justify-center">
          <div className="text-center mb-5"></div>
          <div className="text-center"></div>
        </div>
        <div className="col-span-4 md:col-span-2 row-span-3 bg-[#E3FCF8] rounded-lg p-10"></div>
        <div className="col-span-2 md:col-span-1 row-span-3 bg-[#E3FCF8] rounded-lg p-10 flex items-center justify-center">
          <img src={doctor} alt="doctor" className="rounded-lg" />
        </div>
      </section>
    </div>
  );
};

export default DevProjectsGrid;
