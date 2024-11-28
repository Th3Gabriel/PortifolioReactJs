import "./Tecnologias.css";
import Html5OriginalWordmark from "react-devicons/html5/original-wordmark";
import Css3OriginalWordmark from "react-devicons/css3/original-wordmark";
import JavascriptOriginal from "react-devicons/javascript/original";
import PythonOriginalWordmark from "react-devicons/python/original-wordmark";
import ReactOriginalWordmark from "react-devicons/react/original-wordmark";
import TypescriptOriginal from "react-devicons/typescript/original";
import GitOriginalWordmark from "react-devicons/git/original-wordmark";

function Tecnologias() {
  // Define technologies in arrays for easier management
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
        <div className="label">
          <h2>TECNOLOGIAS</h2>
        </div>
        <div className="Icons">
          {masteredTechnologies.map((tech, index) => (
            <tech.component
              key={index}
              size={80}
              title={tech.name}
              aria-label={tech.name}
            />
          ))}
        </div>
        <div className="label">
          <h3>TECNOLOGIAS QUE ESTÃO SENDO DESENVOLVIDAS:</h3>
        </div>
        <div className="Icons">
          {developingTechnologies.map((tech, index) => (
            <tech.component
              key={index}
              size={80}
              title={tech.name}
              aria-label={tech.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tecnologias;
