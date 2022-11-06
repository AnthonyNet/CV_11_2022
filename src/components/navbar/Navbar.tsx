import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";
import "./Navbar.css";

const Navbar = (): JSX.Element => {
  const { language }:string = useContext(ThemeContext);
  const {setLanguage}:any = useContext(ThemeContext);


  /*const myObj: { [language: string] :any} = language;*/

/*  interface NavInterface {
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
*/
  const navbarData: {
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
  } = {
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

  

  const handleChange = (e: React.MouseEvent<HTMLOptionElement, MouseEvent>) => {
    const value = (e.target as HTMLOptionElement).value;
    setLanguage(value);
  };

 
 

  return (
    <nav className="navbar">
      <select name="language" id="language">
        <option onClick={handleChange} value="english">
          English
        </option>
        <option onClick={handleChange} value="german">
          Deutsch
        </option>
        <option onClick={handleChange} value="czech">
          Česky
        </option>
      </select>

      <div className="navLinksCover">
        <NavLink to="/">{navbarData[language].home}</NavLink>
        <NavLink to="/experience">{navbarData[language].experience}</NavLink>
        <NavLink to="/education">{navbarData[language].education}</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
