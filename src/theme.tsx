import Reacto from "react";

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

export const languagesData:any = {
    english: {
      home: {
        name: "Antonín Zejda",
        cv: "Resumé for CN Group",
        paragraph1: "The reason I think you are the best choice for me is that I know you have more than 6 years of experience with trainee programs for junior developers. The second important thing is I would like to continuously improve not only my programming knowledge, but also I am interested in your language courses."
       
      },
      experience: {
       heading: "Experience",
       programming: "Programming",
       tools: "Tools",
       graphic: "Graphic Editors"
      },
      education:{
        heading1: "Education",
        heading2: "Posts",
        year: "2013-2015",
        name: "Economy and travel business",
        field: "Small business companies",
        adress: "Rantířovská 9 Jihlava",
        graduation: "Graduation",
        experience: ["Leader of groups",  "Project manager´s representative"],
        heading3: "Career education:",
        welding: "9 international welding certificates",
        piping: "1 piping certificate",

      }
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
       education:{
        heading1: "Ausbildung",
        heading2: "Arbeit",
        year: "2013-2015",
        name: "Schule für Wirtschaft und Tourismus",
        field: "Kleine Unternehmen",
        adress: "Rantířovská 9 Jihlava",
        graduation: "Abitur",
        experience: ["Gruppenführer",  "Stellvertretender Bauleiter"],
        heading3: "Berufsausbildung:",
        welding: "9 Internationale Schweißzertifikaten",
        piping: "1 Rorhleitunsbau Zertifikate",
      }
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
       education:{
        heading1: "Vzdělání",
        heading2: "Pozice",
        year: "2013-2015",
        name: "Škola ekonomiky a cestovního ruchu",
        field: "Podnikání malých firem",
        adress: "Rantířovská 9 Jihlava",
        graduation: "Maturitní zkouška",
        experience: ["Vedoucí skupiny",  "Zástupce stavbyvedoucího"],
        heading3: "Karérní vzdělání:",
        welding: "9 mezinárodních certifikací",
        piping: "1 Potrubářská certifikace",
      }
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
          overflow: {
            icon: <DiStackoverflow />,
            text: "Stack overflow",
          },

          nodejs: {
            icon: <DiNodejsSmall />,
            text: "NodeJS",
          },
          php: {
            icon: <FaPhp />,
            text: "PHP",
          },
        },
        tools: {
      
          bootstrap: {
            icon: <SiBootstrap />,
            text: "Bootstrap",
          },
          tailwind: {
            icon: <SiTailwindcss />,
            text: "Tailwind",
          },
          github: {
            icon: <DiGithubBadge />,
            text: "GitHub",
          },
          
          vercel: {
            icon: <SiVercel />,
            text: "Vercel",
          },
          responsive: {
            icon: <MdWebStories />,
            text: "Responsive",
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