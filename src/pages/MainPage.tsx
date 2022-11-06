import React, {useContext} from "react";
import Navbar from "../components/navbar/Navbar";
import { ThemeContext } from "../ThemeContext";

const MainPage = () => {
  const {language}:any = useContext(ThemeContext);
  const {languagesData}:any = useContext(ThemeContext);

  const path = languagesData[language].home;

  
  return (
    <div className="mainPage">
      <Navbar />
      <main>
      <span className="animSpan"><h6>C:\zejda-a-cv\ &#10095;</h6><h6 className="anime">|</h6></span>
        <h2>{path.name}</h2>
        <h5>{path.cv}</h5>
        <p>
          {path.paragraph1}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus debitis dolorem deleniti iste corrupti hic ipsa dolorum
          quod eveniet aliquam assumenda fugit, incidunt numquam perspiciatis.
          Aut corrupti modi quis maiores.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus debitis dolorem deleniti iste corrupti hic ipsa dolorum
          quod eveniet aliquam assumenda fugit, incidunt numquam perspiciatis.
          Aut corrupti modi quis maiores.
        </p>
      </main>
    </div>
  );
};

export default MainPage;
