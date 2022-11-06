import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";
import "./Navbar.css";

const Navbar = (): JSX.Element => {
  const { language, setLanguage } = useContext(ThemeContext);

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

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
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
