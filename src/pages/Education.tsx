import { useContext } from "react";
import Navbar from "../components/navbar/Navbar";
import EducationComponent from '../components/education/Education'
import "../components/education/Education.css";


const Education:React.FC = () => {

  return (
    <div className="education">
      <Navbar />
      <EducationComponent />
    </div>
  );
};

export default Education;
