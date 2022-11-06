import { useContext } from "react";
import Navbar from "../components/navbar/Navbar";
import "../components/education/Education.css";
import { ThemeContext } from "../ThemeContext";

const Education = () => {
  const { language, languagesData } = useContext(ThemeContext);
  const path = languagesData[language].education;

  return (
    <div className="education">
      <Navbar />
      <main>
        <span className="animSpan">
          <h6>C:\zejda-a-cv\education &#10095;</h6>
          <h6 className="anime">|</h6>
        </span>
        <h2>{path.heading1}</h2>

        <div className="articles">
          <article>
            
            <h4>{path.year}</h4>

            <p>{path.name}</p>
            <p>{path.field}</p>
            <p>{path.adress}</p>
            <p>{path.graduation}</p>
          </article>
          <article>
            <h4>{path.heading2}</h4>
            <p>{path.experience[0]}</p>
            <p>{path.experience[1]}</p>
          </article>
        </div>

        <article className="career">
          <h2>{path.heading3}</h2>
          <h4>{path.welding}</h4>

          <h4>{path.piping}</h4>
        </article>
      </main>
    </div>
  );
};

export default Education;
