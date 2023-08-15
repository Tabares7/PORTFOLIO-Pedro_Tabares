import React from "react";
import {
  BiLogoHtml5,
  BiLogoTailwindCss,
  BiLogoCss3,
  BiLogoSass,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoJavascript,
} from "react-icons/bi";

import {
  SiAdobeillustrator,
  SiTailwindcss,
  SiSass,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiJavascript,
  SiAdobephotoshop,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="grid grid-cols-3 text-3xl gap-3 md:text-4xl min-h-full p-5 justify-items-center items-center text-darkgrenn bg-lightgreen">
      <SiHtml5 />
      <SiCss3 />
      <SiJavascript />
      <SiReact />
      <SiTailwindcss />
      <SiNodedotjs />
      <SiAdobeillustrator />
      <SiSass />
      <SiAdobephotoshop />
    </div>
  );
};

export default Skills;
