import React, {useContext} from "react";
import Navbar from "../components/navbar/Navbar";
import { ThemeContext } from "../components/context/ThemeContext";

const MainPage:React.FC = () => {
  const {language} = useContext(ThemeContext);
  const {languagesData} = useContext(ThemeContext);

const path = languagesData[language].home;
 
  return (
    <div className="mainPage">
      <Navbar />
      <main>
      <span className="animSpan"><h6>C:\zejda-a-cv\ &#10095;</h6><h6 className="anime">|</h6></span>
        <h2>{path.name}</h2>
        <h5>{path.cv}</h5>
      
        <p>{path.paragraph2}</p>
        <p>{path.paragraph3}</p>
        <p>{path.paragraph4}</p>
        <p>{path.paragraph5}</p>
        <p>{path.paragraph6}</p>
        <p>{path.paragraph7}</p>
        <p>{path.paragraph8}</p>
      </main>
    </div>
  );
};

export default MainPage;
