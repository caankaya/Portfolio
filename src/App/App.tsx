import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Technos from "../Technos/Technos";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

function App() {
  return (
    <div className="main">
      <div className="flex justify-between min-h-full max-w-6xl m-auto p-4 mb-10 relative max-sm:flex max-sm:flex-col-reverse max-sm:items-center">
        <div className="article-left">
          <h1 className="title text-7xl font-extrabold flex flex-col max-sm:text-4xl max-sm:text-center max-sm:flex-row max-sm:justify-center max-sm:gap-2">
            <span>CAN</span>
            <span>KAYA</span>
          </h1>
          <p className="subtitle text-2xl text-center my-5 max-sm:text-lg">
            <b>
              Développeur Web & Mobile | Spécialisé en React <FontAwesomeIcon icon={faReact} spin size="lg" />
            </b>
            <br />
          </p>
          <div className="button-groupe flex flex-row gap-2 gap-y-2 max-sm:flex-col flex-wrap content-around items-stretch">
            <Link
              to="https://github.com/canoral"
              target="_blank"
              className="bg-secondary px-2 py-1 font-semibold rounded-md text-center text-sm text-white"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" style={{ marginRight: "5px" }} />
              Github
            </Link>

            <Link
              to="https://linkedin.com/in/canoral74"
              target="_blank"
              className="bg-secondary px-2 py-1 font-semibold rounded-md text-center text-sm text-white"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" style={{ marginRight: "5px" }} />
              LinkedIn
            </Link>

            <Link
              to="https://www.instagram.com/dogancan__kaya/"
              target="_blank"
              className="bg-secondary px-2 py-1 font-semibold rounded-md text-center text-sm text-white"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" style={{ marginRight: "5px" }} />
              Instagram
            </Link>

            <Link
              to="mailto:info.canoral@gmail.com"
              className="bg-secondary px-2 py-1 font-semibold rounded-md text-center text-sm text-white"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" style={{ marginRight: "5px" }} />
              info.canoral@gmail.com
            </Link>
          </div>
        </div>
        <div className="article-right w-44 h-44 sm:w-fit sm:h-fit max-sm:flex max-sm:mb-5">
          <img
            src="about.png"
            alt="photo de profil"
            className="rounded-full border-solid border-2"
            width={250}
            height={250}
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-12 mt-16 sm:mt-0 sm:gap-24">
        <Technos />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
