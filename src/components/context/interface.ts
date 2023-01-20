export interface Root {
english: LanguageRoot;
german: LanguageRoot;
czech: LanguageRoot;
icons: IconsRoot;
}

export interface LanguageRoot {
    home: Home;
    experience: Experience;
    education: Education;
    
}

export interface Home{

        name: string;
        cv: string;
        paragraph2: string;
        paragraph3: string;
        paragraph4: string;
        paragraph5: string;
        paragraph6: string;
        paragraph7: string;
        paragraph8: string;
}

export interface Experience {
        heading: string;
        programming: string;
        tools: string;
        graphic: string;
}

export interface Education {

        heading1: string;
        heading2: string;
        year: string;
        name: string;
        field: string;
        adress: string;
        graduation: string;
        experience: string[];
        heading3: string;
        welding: string;
        piping: string;
}

export interface IconsRoot {
    programming: Programming;
    tools: Tools;
    graphic: Graphic;
}

export interface iconItem {
    icon: JSX.Element;
    text: string;
}

export interface Programming {
    typescript : iconItem;
    javascript: iconItem;
    react: iconItem;
    nodejs: iconItem;
    php: iconItem;
}

export interface Tools {
bootstrap: iconItem;
tailwind: iconItem;
github: iconItem;
vercel: iconItem;
responsive : iconItem;
sass: iconItem;
css: iconItem;
html: iconItem;
overflow: iconItem;
}

export interface Graphic {
    figma: iconItem;
    photoshop: iconItem;
    gimp: iconItem;
}


