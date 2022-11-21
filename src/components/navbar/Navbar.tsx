import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import {AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai'
import "./Navbar.css";

const Navbar = (): JSX.Element => {
  const  { language }= useContext<Language>(ThemeContext);
  const { setLanguage }:any = useContext<Language>(ThemeContext);
  const [route, setRoute]= useState<string>(language);
  /*const myObj: { [language: string] :any} = language;*/
interface Language {
  language: string;
}


  interface NavInterface {
    english: {
      home: string;
      experience: string;
      education: string;
    };
    german: {
      home: string;
      experience: string;
      education: string;
    };
    czech: {
      home: string;
      experience: string;
      education: string;
    };
  }



  const navbarData: NavInterface = {
    english: {
      home: "Home",
      experience: "Experience",
      education: "Education",
    },
    german: {
      home: "Home",
      experience: "Erfarungen",
      education: "Ausbildung",
    },
    czech: {
      home: "Domů",
      experience: "Zkušenosti",
      education: "Vzdělání",
    },
  };



  const handleChange = (e: React.MouseEvent<HTMLSelectElement, MouseEvent>) => {
    const valueX = (e.target as HTMLOptionElement).value;
    setLanguage(valueX);
  };




  const{home, experience, education} = navbarData[language];
 /*
  let route =
    language === "english"
      ? navbarData.english
      : language === "german"
      ? navbarData.german
      : navbarData.czech;
*/


  return (
    <nav className="navbar">
      <select name="language" id="language" onClick={handleChange} >
        <option value="english">
          English
        </option>
        <option value="german">
          Deutsch
        </option>
        <option value="czech">
          Česky
        </option>
      </select>



      <div className="navLinksCover">
        <NavLink to="/">{home}</NavLink>
        <NavLink to="/experience">{experience}</NavLink>
        <NavLink to="/education">{education}</NavLink>
      </div>
      <div className="links">
        <a href="https://github.com/AnthonyZet"><AiOutlineGithub /></a>
        <a href="https://www.linkedin.com/in/anton%C3%ADn-zejda-50147b21b/"><AiOutlineLinkedin /></a>
      </div>
    </nav>
  );
};

export default Navbar;
