import React from "react";
import { ProjectTemplate } from "./ProjectTemplate";
import assess101 from "../img/assess101-logo.png";
import assess101IMG from "../img/assess101.png";
import doctor from "../img/doc-pic.png";

const DevProjectsGrid = () => {
  return (
    //
    <div className="lg:w-4/5 mx-auto w-full p-5">
      <ProjectTemplate
      logo={assess101}
      title="Assess101"
      description="I developed an innovative fullstack application designed for primary care clinics, aimed at centralizing and optimizing the medical evaluation process. This tool consolidates a wide variety of screening forms into one place, allowing healthcare providers to generate comprehensive evaluation sessions and apply multiple questionnaires efficiently."
      screenshot={assess101IMG}
      aiText="AI powered"
      patientInfo={{ month: '8', today: '8' }}
      proUpgrade=""
      doctorImage={doctor}
    />
    </div>
  );
};

export default DevProjectsGrid;
