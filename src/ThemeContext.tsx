import React, { createContext, useState } from "react";
import {MdWebStories} from 'react-icons/md';
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiPhotoshop,
  DiNodejsSmall,
  DiPhp,
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

export const ThemeContext = createContext();

export const ThemeProvider = (props: any) => {
  const [language, setLanguage] = useState<string>("english");

  const languagesData:{} = {
    english: {
      home: {
        name: "Antonín Zejda",
        cv: "Resumé for CN Group",
      },
      experience: {
       heading: "Experience",
       programming: "Programming",
       tools: "Tools",
       graphic: "Graphic Editors"
      },
    },
    german: {
      home: {
        name: "Antonín Zejda",
        cv: "Lebenslauf für die CN Group",
      },
      experience: {
        heading: "Erfahrungen",
        programming: "Programmierung",
        tools: "Instrumenten",
        graphic: "Grafikprogramme"
       },
    },
    czech: {
      home: {
        name: "Antonín Zejda",
        cv: "Životopis pro CN Group",
      },
      experience: {
        programming: "Programování",
        heading: "Zkušenosti",
        tools: "Nástroje",
        graphic: "Grafické programy"
       },
    },
    icons: {
        programming: {
          typescript: {
            icon: <SiTypescript />,
            text: "TypeScript",
          },

          react: {
            icon: <DiReact />,
            text: "React",
          },

          javascript: {
            icon: <DiJavascript1 />,
            text: "JavaScript",
          },

          github: {
            icon: <DiGithubBadge />,
            text: "GitHub",
          },
          overflow: {
            icon: <DiStackoverflow />,
            text: "Stack overflow",
          },

          nodejs: {
            icon: <DiNodejsSmall />,
            text: "NodeJS",
          },
          php: {
            icon: <DiPhp />,
            text: "PHP",
          },
          
          vercel: {
            icon: <SiVercel />,
            text: "Vercel",
          },
        },
        tools: {
      
          responsive: {
            icon: <MdWebStories />,
            text: "Responsive",
          },
          bootstrap: {
            icon: <SiBootstrap />,
            text: "Bootstrap",
          },
          tailwind: {
            icon: <SiTailwindcss />,
            text: "Tailwind",
          },
          sass: {
            icon: <DiSass />,
            text: "Sass",
          },
          css: {
            icon: <DiCss3 />,
            text: "Css",
          },
          html: {
            icon: <DiHtml5 />,
            text: "HTML",
          },
        },
        graphic:{
          figma: {
              icon: <SiFigma />,
              text: "Figma",
            },
            photoshop: {
              icon: <DiPhotoshop />,
              text: "Photoshop",
            },

            gimp: {
                icon: <SiGimp />,
                text: "Gimp",
              },
        }
      },
  };

  return (
    <ThemeContext.Provider value={{ language, setLanguage, languagesData }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
