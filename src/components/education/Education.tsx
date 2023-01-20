import { useContext } from "react";
import "./Education.css";
import { ThemeContext } from "../context/ThemeContext";

const Education: React.FC = () => {
  const { language }:any = useContext(ThemeContext);
  const { languagesData }: any = useContext(ThemeContext);

  const path = languagesData[language].education;

  return (
    <main>
      <span className="animSpan">
        <h6>C:\zejda-a-cv\education &#10095;</h6>
        <h6 className="anime">|</h6>
      </span>
      <h2>{path.heading1}</h2>

      <div className="articles">
        <article>
          <h3 className="heading">{path.year}</h3>

          <p>{path.name}</p>
          <p>{path.field}</p>
          <p>{path.adress}</p>
          <p>
            <strong>{path.graduation}</strong>
          </p>
        </article>
        <article>
          <h3 className="heading">{path.heading2}</h3>
          <p>{path.experience[0]}</p>
          <p>{path.experience[1]}</p>
        </article>
      </div>

      <article className="career">
        <h2 className="heading">{path.heading3}</h2>
        <h4>{path.welding}</h4>

        <h4>{path.piping}</h4>
      </article>
    </main>
  );
};

export default Education;
