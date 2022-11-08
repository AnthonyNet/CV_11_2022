import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import {AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai'
import "./Navbar.css";

const Navbar = (): JSX.Element => {
  const { language } = useContext(ThemeContext);
  const { setLanguage }: any = useContext(ThemeContext);

  /*const myObj: { [language: string] :any} = language;*/

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

  /*let vysledek = language === "english"?["Home", "Experience", "Education"]:["Home", "Erfahrungen", "Ausbildung"];*/



  const handleChange = (e: React.MouseEvent<HTMLSelectElement, MouseEvent>) => {
    const valueX = (e.target as HTMLOptionElement).value;
    setLanguage(valueX);
  };
 
  let route =
    language === "english"
      ? navbarData.english
      : language === "german"
      ? navbarData.german
      : navbarData.czech;

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
        <NavLink to="/">{route.home}</NavLink>
        <NavLink to="/experience">{route.experience}</NavLink>
        <NavLink to="/education">{route.education}</NavLink>
      </div>
      <div className="links">
        <a href="https://github.com/AnthonyZet"><AiOutlineGithub /></a>
        <a href="https://www.linkedin.com/in/anton%C3%ADn-zejda-50147b21b/"><AiOutlineLinkedin /></a>
      </div>
    </nav>
  );
};

export default Navbar;
