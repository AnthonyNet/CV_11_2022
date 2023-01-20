import React, { useState  } from "react";
import { languagesData } from './theme';

type ThemeContextProviderProps = {
  children: React.ReactNode;
}


export const ThemeContext =  React.createContext(languagesData);



export const ThemeContextProvider = ({children}: ThemeContextProviderProps) =>{
  const [language, setLanguage] = useState<string>("english");

  return <ThemeContext.Provider value={{languagesData, language, setLanguage}} > {children}</ThemeContext.Provider>
}


