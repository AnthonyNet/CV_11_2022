import React, { useContext } from "react";
import Navbar from "../components/navbar/Navbar";
import { ThemeContext } from "../ThemeContext";
import ExpSection from '../components/experience/ExpSection';

const Experience:React.FC = () => {
  const{ language }:any = useContext(ThemeContext);
  const { languagesData}:any = useContext(ThemeContext);
 
  interface Info{
    heading: string,
    programming :string,
    tools: string,
    graphic: string
  }
  const{heading, programming, tools, graphic}:Info = languagesData[language].experience;
 
  const path = languagesData.icons;
  const programmingPath = languagesData.icons.programming;
  const toolsPath = languagesData.icons.tools;
  const graphicPath:Theme=  languagesData.icons.graphic;


type Theme = {
  figma: {
    icon: any,
    text: string
  },
  photostop: {
    icon: any,
    text: string
  },
  gimp: {
    icon: any,
    text: string
  }
}

  return (
    <div className="experience">
      <Navbar />
      <main>
      <span className="animSpan"><h6>C:\zejda-a-cv\experience &#10095;</h6><h6 className="anime">|</h6></span>
        <h2>{heading}</h2>
        <h3>{programming}</h3>

        <ExpSection dataProps={programmingPath} />

        <h3>{tools}</h3>

        <ExpSection dataProps={path.tools} />

        <h3>{graphic}</h3>

        <ExpSection dataProps={graphicPath} />
      </main>
    </div>
  );
};

export default Experience;
