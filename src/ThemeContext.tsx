import React, { createContext, useState  } from "react";
import { languagesData } from './theme';
/*
import {MdWebStories} from 'react-icons/md';
import {FaPhp} from 'react-icons/fa';
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiPhotoshop,
  DiNodejsSmall,
  DiJavascript1,
  DiReact,
  DiGithubBadge,
  DiStackoverflow,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiBootstrap,
  SiVercel,
  SiGimp,
  SiFigma,
  SiTypescript,
} from "react-icons/si";
*/
/*
interface IContextProps {
  dispatch: ({type}:{type:string}) => void;
}*/

type ThemeContextProviderProps = {
  children: React.ReactNode;
}

export const ThemeContext =  React.createContext(languagesData);

export const ThemeContextProvider = ({children}: ThemeContextProviderProps) =>{
  const [language, setLanguage] = useState<string>("english");
  return <ThemeContext.Provider value={{languagesData, language, setLanguage}} > {children}</ThemeContext.Provider>
}
/*
export const ThemeProvider: React.FC<React.ReactNode> = (props) => {
  const [language, setLanguage] = useState<any>("english");*/

  
  
/*
  return (
    <ThemeContext.Provider value={{ language, setLanguage, languagesData }}>
      {props.children}
    </ThemeContext.Provider>
  );
};*/
