import React, {useContext} from "react";
import Navbar from "../components/navbar/Navbar";
import { ThemeContext } from "../ThemeContext";

const MainPage = () => {
  const {language, setLanguage} = useContext(ThemeContext);
  const {languagesData} = useContext(ThemeContext)

  
  return (
    <div className="mainPage">
      <Navbar />
      <main>
        <h2>{languagesData[language].home.name}</h2>
        <h5>{languagesData[language].home.cv}</h5>
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
