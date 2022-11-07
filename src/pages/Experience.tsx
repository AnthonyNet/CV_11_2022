import React from "react";
import Navbar from "../components/navbar/Navbar";
import ExperienceComp from "../components/experience/ExperienceComp"

const Experience:React.FC = () => {

  return (
    <div className="experience">
      <Navbar />
      <ExperienceComp />
    </div>
  );
};

export default Experience;
