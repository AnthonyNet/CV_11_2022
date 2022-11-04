import React, { useContext } from "react";
import Navbar from "../components/navbar/Navbar";
import { ThemeContext } from "../ThemeContext";
import ExpSection from '../components/experience/ExpSection';

const Experience = () => {
  const { language, languagesData } = useContext(ThemeContext);
 
  interface Info{
    heading: string,
    programming :string,
    tools: string,
    graphic: string
  }
  const{heading, programming, tools, graphic}:Info = languagesData[language].experience;
  
  const programmingProps:{} = languagesData.icons.programming;
  const toolProps:{} = languagesData.icons.tools;
  const graphicProps:{} = languagesData.icons.graphic;


  return (
    <div className="experience">
      <Navbar />
      <main>
        <h2>{heading}</h2>
        <h3>{programming}</h3>

        <ExpSection data={programmingProps} />

        <h3>{tools}</h3>

        <ExpSection data={toolProps} />

        <h3>{graphic}</h3>

        <ExpSection data={graphicProps} />
      </main>
    </div>
  );
};

export default Experience;
