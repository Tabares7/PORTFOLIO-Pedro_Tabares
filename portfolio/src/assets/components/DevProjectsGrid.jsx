import React from "react";
import { ProjectTemplate } from "./ProjectTemplate";
import assess101 from "../img/assess101-logo.png";
import assess101IMG from "../img/assess101.png";
import doctor from "../img/doc-pic.png";

import buenafelogo from "../img/buenafe-logo.png";
import buenafeIMG from "../img/buenafe-ss.png";
import patient from "../img/ptn-pic.png";
import { FaHtml5, FaLink, FaNodeJs, FaReact } from "react-icons/fa6";
import { SiExpress, SiJavascript, SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const DevProjectsGrid = () => {
  return (
    <>
      <div className=" mx-auto w-full p-5 md:p-10 bg-gradient-to-br from-[#1e593e] to-[#0fff83] ">
        <section className="grid gap-3 min-h-[1500px] grid-cols-4 grid-rows-10 md:min-h-[1300px] md:grid-cols-6 md:grid-rows-5">
          <div className="col-span-4 md:col-span-2 row-span-2 bg-[#E3FCF8] rounded-lg flex items-center justify-center p-10">
            <img src={assess101} alt="logo project assess 101" />
          </div>
          <div className="col-span-4 md:col-span-2 row-span-2 bg-[#313B4C] text-[#E3FCF8] rounded-lg p-10 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-5 ">Description</h1>
            <div>
              <p className="">
                An{" "}
                <span className="font-bold">
                  innovative fullstack application
                </span>{" "}
                designed for primary care clinics, aimed at centralizing and
                optimizing the medical evaluation process. This tool
                consolidates a wide variety of screening forms into one place,
                allowing healthcare providers to{" "}
                <span className="font-bold">
                  generate comprehensive evaluation sessions
                </span>{" "}
                and apply multiple questionnaires efficiently.
              </p>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 row-span-1 text-[#28482a] bg-gradient-to-br from-[#add4ce] via-[#bcff58] to-[#0fff83] rounded-lg flex flex-col justify-center items-center">
            <p className="md:text-5xl text-3xl font-bold">AI</p>
            <p className="md:text-2xl text-xl  xl:text-2xl 2xl:text-3xl uppercase">powered</p>
          </div>
          <div className="col-span-2 md:col-span-1 row-span-1 bg-[#313B4C] rounded-lg flex flex-col justify-center items-center p-5">
            <p className="text-xl  xl:text-2xl 2xl:text-3xl font-bold text-center text-[#E3FCF8]">
              Form Centralization
            </p>
          </div>
          <div className="col-span-2 md:col-span-1 row-span-1 bg-[#313B4C] text-[#E3FCF8] rounded-lg flex flex-col justify-center items-center p-5">
            <p className="text-xl  xl:text-2xl 2xl:text-3xl font-bold text-center">
              Automated Evaluations and Plans
            </p>
          </div>
          <div className="col-span-2 md:col-span-1 row-span-1 text-[#313B4C] bg-[#E3FCF8] rounded-lg flex flex-col justify-center items-center">
            <p className="text-xl  xl:text-2xl 2xl:text-3xl font-bold text center">Cost Reduction</p>
          </div>
          <div className="col-span-4 md:col-span-3 row-span-3 bg-[#E3FCF8] rounded-lg flex items-center justify-center">
            <img
              src={assess101IMG}
              alt="application screenshot"
              className="rounded-lg max-h-full"
            />
          </div>
          <div className="col-span-4 md:col-span-3 row-span-3 bg-[#313b4c] rounded-lg  relative">
            <img
              src={doctor}
              alt="doctor"
              className="rounded-lg md:absolute bottom-0  xl:h-[80vh] 2xl:h-[100vh] object-cover md:overflow-visible xl:overflow-hidden"
            />
          </div>
          <div className="col-span-4 md:col-span-3 row-span-1 bg-[#313B4C] text-[#E3FCF8] rounded-lg p-10 flex justify-between items-center px-20">
            <div className="md:text-7xl text-3xl">
              {" "}
              <FaReact />{" "}
            </div>
            <div className="md:text-7xl text-3xl">
              {" "}
              <SiTailwindcss />{" "}
            </div>
            <div className="md:text-7xl text-3xl">
              {" "}
              <FaNodeJs />{" "}
            </div>
            <div className="md:text-7xl text-3xl">
              {" "}
              <SiExpress />{" "}
            </div>
            <div className="md:text-7xl text-3xl">
              {" "}
              <SiMongodb />{" "}
            </div>
          </div>

          <div className="col-span-4 md:col-span-3 row-span-2 text-[#313B4C] bg-[#E3FCF8] rounded-lg p-10 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-5 ">Results and Benefits</h1>
            <div className=" tracking-normal flex flex-col gap-2">
              <p>
                <strong>Resource Savings:</strong> The application has enabled
                clinics to save on paper and staffing costs, in addition to
                optimizing evaluation time.
              </p>
              <p>
                <strong>Efficiency Improvement:</strong> The automatic
                generation of reports and medical plans has significantly
                reduced the workload on medical staff, allowing for a more
                direct focus on patient care.
              </p>
              <p>
                <strong>Sector Innovation:</strong> This tool has introduced a
                modern and efficient way to manage medical evaluations,
                positioning the clinics that use it at the forefront of health
                technology.
              </p>
            </div>
          </div>
          <a
            href="https://assess101.netlify.app/login"
            target="_blank"
            className="col-span-2 md:col-span-1 md:row-span-1 row-span-2 text-[#313b4c]  bg-gradient-to-br from-[#add4ce] via-[#bcff58] to-[#0fff83]  rounded-lg flex flex-col justify-center items-center p-5 hover:via-[#8dff80] hover:to-[#0fff1f] hover:cursor-pointer"
          >
            <div className="text-2xl md:text-4xl mb-2 ">
              {" "}
              <FiExternalLink />{" "}
            </div>
            <p className="text-xl  xl:text-2xl 2xl:text-3xl font-bold text center">Landing Page</p>
          </a>
          <a
            href="#"
            target="_blank"
            className="col-span-2 md:col-span-1 row-span-1 bg-[#E3FCF8] text-[#313b4c] rounded-lg flex flex-col justify-center items-center p-5 hover:bg-[#d2efea] hover:cursor-pointer"
          >
            <div className="text-2xl md:text-4xl mb-2 ">
              {" "}
              <FiExternalLink />{" "}
            </div>
            <p className="text-xl  xl:text-2xl 2xl:text-3xl font-bold text center">Go to code</p>
          </a>
          <a
            href="https://assess101.netlify.app/login"
            target="_blank"
            className="col-span-2 md:col-span-1 row-span-1  bg-[#313B4C] text-[#E3FCF8] rounded-lg flex flex-col justify-center items-center p-5 hover:bg-[#202835] hover:cursor-pointer"
          >
            <div className="text-2xl md:text-4xl mb-2 ">
              {" "}
              <FiExternalLink />{" "}
            </div>
            <p className="text-xl  xl:text-2xl 2xl:text-3xl font-bold text center">Watch Live</p>
          </a>
        </section>
      </div>
      
      {/* ====================================================== */}

      <div className=" mx-auto w-full p-5 md:p-10 bg-gradient-to-r to-[#9daa2e] from-[#2e476e] ">
        <section className="grid gap-3 min-h-[1500px] grid-cols-4 grid-rows-10 md:min-h-[1300px] md:grid-cols-6 md:grid-rows-5">
          <div className="col-span-4 md:col-span-2 row-span-2 bg-[#e3f1fc] rounded-lg flex items-center justify-center p-10">
            <img src={buenafelogo} alt="logo project assess 101" />
          </div>
          <div className="col-span-4 md:col-span-2 row-span-2 bg-[#0062FF] text-[#e3f1fc] rounded-lg p-10 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-5 ">Description</h1>
            <div>
              <p className=" tracking-normal ">
                The main website for Clínica Familiar La
                Buena Fe. This <span className="font-bold">comprehensive web application</span> displays all the
                essential information about the clinic, including contact
                details, services offered, <span className="font-bold">main links for scheduling
                appointments, and telemedicine services</span> (external links to
                third-party pages). The site also features an "About Us" section
                and a blog.
              </p>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 row-span-1 text-[#212123] bg-gradient-to-br from-[#adc0d4] via-[#58eeff] to-[#ef0fff] rounded-lg flex flex-col gap-3 justify-center items-center">
            <p className="md:text-5xl text-3xl font-bold">Blog</p>
            <p className="md:text-2xl text-xl  xl:text-2xl 2xl:text-3xl ">integrated</p>
          </div>
          <div className="col-span-2 md:col-span-1 row-span-1 bg-[#0062FF] rounded-lg flex flex-col justify-center items-center p-5">
            <p className="text-xl  xl:text-2xl 2xl:text-3xl font-bold text-center text-[#e3f1fc]">
            Business Information Display
            </p>
          </div>
          <div className="col-span-2 md:col-span-1 row-span-1 bg-[#0062FF] text-[#e3f1fc] rounded-lg flex flex-col justify-center items-center p-5">
            <p className="text-xl  xl:text-2xl 2xl:text-3xl font-bold text-center">
            Appointment Scheduling
            </p>
          </div>
          <div className="col-span-2 md:col-span-1 row-span-1 text-[#0062FF] bg-[#e3f1fc] rounded-lg flex flex-col justify-center items-center">
            <p className="text-xl  xl:text-2xl 2xl:text-3xl font-bold text center">About Us Section</p>
          </div>
          
          <div className="col-span-4 md:col-span-3 row-span-3 bg-[#0062FF] rounded-lg  relative">
            <img
              src={patient}
              alt="doctor"
              className="rounded-lg md:absolute bottom-0  xl:h-[70vh] 2xl:h-[100vh] object-cover md:overflow-visible xl:overflow-hidden"
            />
          </div>
          <div className="col-span-4 md:col-span-3 row-span-3 bg-[#e3f1fc] rounded-lg  flex items-center justify-center">
            <img
              src={buenafeIMG}
              alt="application screenshot"
              className="rounded-lg max-h-full"
            />
          </div>
          <div className="col-span-4 md:col-span-3 row-span-1 bg-[#0062FF] text-[#e3f1fc] rounded-lg p-10 flex justify-between items-center px-20">
            <div className="md:text-7xl text-3xl">
              {" "}
              <FaReact />{" "}
            </div>
            <div className="md:text-7xl text-3xl">
              {" "}
              <SiTailwindcss />{" "}
            </div>
            <div className="md:text-7xl text-3xl">
              {" "}
              <FaHtml5/>{" "}
            </div>
            <div className="md:text-7xl text-3xl">
              {" "}
              <SiJavascript />{" "}
            </div>
          </div>

          <div className="col-span-4 md:col-span-3 row-span-2 text-[#0062FF] bg-[#e3f1fc] rounded-lg p-10 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-5 ">Results and Benefits</h1>
            <div className=" tracking-normal flex flex-col gap-2">
              <p>
                <strong>Enhanced Accessibility:</strong> The website provides a central hub for patients to access all necessary information and services, improving overall accessibility.
              </p>
              <p>
                <strong>Streamlined Appointment Scheduling:</strong> By including main links for scheduling appointments, the website simplifies the process for patients, leading to increased appointment bookings.
              </p>
              <p>
                <strong>Expanded Reach Through Telemedicine: </strong> The integration of telemedicine links allows the clinic to reach more patients, providing care remotely and increasing the clinic's service capacity.
                technology.
              </p>
              <p>
                <strong>Improved Patient Engagement:  </strong> The "About Us" section and blog enhance patient engagement by providing valuable information and fostering a connection with the clinic.
              </p>
              <p>
                <strong>Modern and Responsive Design: </strong> Utilizing React.js and Tailwind CSS ensures a modern, responsive design that offers a seamless user experience across different devices.
              </p>
            </div>
          </div>
          <a
            href="https://assess101.netlify.app/login"
            target="_blank"
            className="col-span-2 md:col-span-1 md:row-span-1 row-span-2 text-[#0062FF]  bg-gradient-to-br from-[#adc0d4] via-[#58eeff] to-[#ef0fff]   rounded-lg flex flex-col justify-center items-center p-5 hover:via-[#8dff80] hover:to-[#0fff1f] hover:cursor-pointer"
          >
            <div className="text-2xl md:text-4xl mb-2 ">
              {" "}
              <FiExternalLink />{" "}
            </div>
            <p className="text-xl  xl:text-2xl 2xl:text-3xl font-bold text center">Landing Page</p>
          </a>
          <a
            href="https://github.com/Tabares7/clinicalabuenafeweb"
            target="_blank"
            className="col-span-2 md:col-span-1 row-span-1 bg-[#e3f1fc] text-[#0062FF] rounded-lg flex flex-col justify-center items-center p-5 hover:bg-[#d2efea] hover:cursor-pointer"
          >
            <div className="text-2xl md:text-4xl mb-2 ">
              {" "}
              <FiExternalLink />{" "}
            </div>
            <p className="text-xl  xl:text-2xl 2xl:text-3xl font-bold text center">Go to code</p>
          </a>
          <a
            href="https://assess101.netlify.app/login"
            target="_blank"
            className="col-span-2 md:col-span-1 row-span-1  bg-[#0062FF] text-[#e3f1fc] rounded-lg flex flex-col justify-center items-center p-5 hover:bg-[#202835] hover:cursor-pointer"
          >
            <div className="text-2xl md:text-4xl mb-2 ">
              {" "}
              <FiExternalLink />{" "}
            </div>
            <p className="text-xl  xl:text-2xl 2xl:text-3xl font-bold text center">Watch Live</p>
          </a>
        </section>
      </div>
    </>
  );
};

export default DevProjectsGrid;
