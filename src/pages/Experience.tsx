import React, { useContext } from "react";
import Navbar from "../components/navbar/Navbar";
import { ThemeContext } from "../ThemeContext";
import ExpSection from '../components/experience/ExpSection';

const Experience = () => {
  const{ language }:any = useContext(ThemeContext);
  const { languagesData}:any = useContext(ThemeContext);
 
  interface Info{
    heading: string,
    programming :string,
    tools: string,
    graphic: string
  }
  const{heading, programming, tools, graphic}:Info = languagesData[language].experience;
  console.log(heading);
  
  
  const path = languagesData.icons;



  return (
    <div className="experience">
      <Navbar />
      <main>
      <span className="animSpan"><h6>C:\zejda-a-cv\experience &#10095;</h6><h6 className="anime">|</h6></span>
        <h2>{heading}</h2>
        <h3>{programming}</h3>

        <ExpSection data={path.programming} />

        <h3>{tools}</h3>

        <ExpSection data={path.tools} />

        <h3>{graphic}</h3>

        <ExpSection data={path.graphic} />
      </main>
    </div>
  );
};

export default Experience;
