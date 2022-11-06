import { useContext } from "react";
import Navbar from "../components/navbar/Navbar";
import "../components/education/Education.css";
import { ThemeContext } from "../ThemeContext";

const Education = () => {
  const { language, languagesData } = useContext(ThemeContext);
  const route = languagesData[language].education;

  return (
    <div className="education">
      <Navbar />
      <main>
        <span className="animSpan">
          <h6>C:\zejda-a-cv\education &#10095;</h6>
          <h6 className="anime">|</h6>
        </span>
        <h2>{route.heading}</h2>

        <div className="articles">
          <article>
            <h4>{route.year}</h4>
            
              <p>{route.name}</p>
              <p>{route.field}</p>
              <p>{route.adress}</p>
              <p>{route.graduation}</p>
           
          </article>
          <article>
                <h3>{route.heading2}</h3>
              <p>{route.experience[0]}</p>
              <p>{route.experience[1]}</p>
           
          </article>
        </div>

      </main>
    </div>
  );
};

export default Education;
