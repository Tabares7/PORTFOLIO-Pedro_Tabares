import React from 'react';

export const ProjectTemplate = ({ logo, title, description, screenshot, aiText, patientInfo, proUpgrade, doctorImage }) => {
  return (
    <section className="grid gap-3 min-h-[1500px] grid-cols-4 grid-rows-8 md:min-h-[1300px] md:grid-cols-6 md:grid-rows-6">
      <div className="col-span-4 md:col-span-2 row-span-2 bg-[#E3FCF8] rounded-lg flex items-center justify-center p-10">
        <img src={logo} alt="logo project assess 101" />
      </div>
      <div className="col-span-4 md:col-span-2 row-span-2 bg-[#E3FCF8] rounded-lg p-10">
        <h1 className="text-3xl font-bold ">{title}</h1>
        <div>
          <p className="">{description}</p>
        </div>
      </div>
      <div className="col-span-2 md:col-span-1 row-span-1 bg-[#E3FCF8] rounded-lg flex flex-col justify-center items-center">
        <p className="text-3xl font-bold">AI</p>
        <p className="text-xl">powered</p>
      </div>
      <div className="col-span-4 md:col-span-4 row-span-4 bg-[#E3FCF8] rounded-lg p-10 flex items-center justify-center">
        <img src={screenshot} alt="application screenshot" className="rounded-lg" />
      </div>
      <div className="col-span-4 md:col-span-2 row-span-4 bg-[#E3FCF8] rounded-lg p-10">
        <p>{aiText}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
        <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className="col-span-2 md:col-span-1 row-span-2 bg-[#E3FCF8] rounded-lg p-10 flex flex-col justify-center">
        <div className="text-center mb-5">
          <p className="text-xl font-bold">{patientInfo.month}</p>
          <p>Patients this month</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold">{patientInfo.today}</p>
          <p>Patients today</p>
        </div>
      </div>
      <div className="col-span-4 md:col-span-2 row-span-3 bg-[#E3FCF8] rounded-lg p-10">
        <p>Upgrade to PRO</p>
        <p>{proUpgrade}</p>
      </div>
      <div className="col-span-2 md:col-span-1 row-span-3 bg-[#E3FCF8] rounded-lg p-10 flex items-center justify-center">
        <img src={doctorImage} alt="doctor" className="rounded-lg" />
      </div>
    </section>
  );
};
