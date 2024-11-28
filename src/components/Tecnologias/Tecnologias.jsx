import React from "react";
import "./Tecnologias.css";
import useAOS from "../../Hooks/AOS"; // Import the custom hook
import Html5OriginalWordmark from "react-devicons/html5/original-wordmark";
import Css3OriginalWordmark from "react-devicons/css3/original-wordmark";
import JavascriptOriginal from "react-devicons/javascript/original";
import PythonOriginalWordmark from "react-devicons/python/original-wordmark";
import ReactOriginalWordmark from "react-devicons/react/original-wordmark";
import TypescriptOriginal from "react-devicons/typescript/original";
import GitOriginalWordmark from "react-devicons/git/original-wordmark";

function Tecnologias() {
  useAOS({ duration: 2000 }); // Reuse the custom hook

  const masteredTechnologies = [
    { component: Html5OriginalWordmark, name: "HTML5" },
    { component: Css3OriginalWordmark, name: "CSS3" },
    { component: JavascriptOriginal, name: "JavaScript" },
    { component: PythonOriginalWordmark, name: "Python" },
    { component: ReactOriginalWordmark, name: "React" },
    { component: TypescriptOriginal, name: "TypeScript" },
    { component: GitOriginalWordmark, name: "Git" },
  ];

  const developingTechnologies = [
    { component: TypescriptOriginal, name: "TypeScript" },
  ];

  return (
    <div className="neutral-bg">
      <div className="container">
        <div className="label" data-aos="fade-left">
          <h2>TECNOLOGIAS</h2>
        </div>
        <div className="Icons">
          {masteredTechnologies.map((tech, index) => (
            <div data-aos="zoom-in" key={index}>
              <tech.component
                size={80}
                title={tech.name}
                aria-label={tech.name}
              />
            </div>
          ))}
        </div>
        <div className="label" data-aos="fade-right">
          <h3>TECNOLOGIAS QUE ESTÃO SENDO DESENVOLVIDAS:</h3>
        </div>
        <div className="Icons">
          {developingTechnologies.map((tech, index) => (
            <div data-aos="zoom-in" key={index}>
              <tech.component
                size={80}
                title={tech.name}
                aria-label={tech.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tecnologias;
