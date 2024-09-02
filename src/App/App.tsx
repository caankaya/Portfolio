import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Technos from "../Technos/Technos";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import { useEffect, useState } from "react";

function App() {
  const textDesktop: string = "Développeur Web & Mobile | Spécialisé en React";
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="main">
      <div className="flex justify-between min-h-full max-w-6xl m-auto p-4 mb-28 relative max-sm:flex max-sm:flex-col-reverse max-sm:items-center">
        <div className="article-left">
          <h1 className="title flex flex-col bg-gradient-to-r from-primary via-secondary to-accent text-7xl font-extrabold max-sm:text-4xl max-sm:text-center max-sm:flex-row max-sm:justify-center max-sm:gap-2">
            <span>CAN </span>
            <span className="max-sm:mb-6">KAYA</span>
          </h1>
          <p className="subtitle text-2xl text-center my-5 max-sm:text-lg text-accent font-bold max-sm:mb-16">
            {screenSize < 640 ? (
              <>
                <span>Développeur Web & Mobile</span>
                <br />
                <span>Spécialisé en React</span>
              </>
            ) : (
              textDesktop
            )}
            <FontAwesomeIcon
              icon={faReact}
              spin
              size="lg"
              style={{ marginLeft: ".5rem" }}
            />
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            <Link
              to="https://github.com/canoral"
              target="_blank"
              className="bg-secondary px-2 py-1 rounded-md text-center text-sm text-white"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="lg"
                style={{ marginRight: "5px" }}
              />
              Github
            </Link>

            <Link
              to="https://linkedin.com/in/canoral74"
              target="_blank"
              className="bg-secondary px-2 py-1 rounded-md text-center text-sm text-white"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="lg"
                style={{ marginRight: "5px" }}
              />
              LinkedIn
            </Link>

            <Link
              to="https://www.instagram.com/dogancan__kaya/"
              target="_blank"
              className="bg-secondary px-2 py-1 rounded-md text-center text-sm text-white"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                style={{ marginRight: "5px" }}
              />
              Instagram
            </Link>

            <Link
              to="mailto:can.kaya@aol.com"
              className="bg-secondary px-2 py-1 rounded-md text-center text-sm text-white"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                size="lg"
                style={{ marginRight: "5px" }}
              />
              can.kaya@aol.com
            </Link>
          </div>
        </div>
        <div className="article-right before:bg-gradient-to-r from-primary to-secondary max-sm:flex w-[200px] h-[200px] max-sm:w-[125px] max-sm:h-[125px] max-sm:mb-5 after:bg-base-100 max-sm:after:inset-1 after:inset-[6px]">
          <div className="content">
            <img id="photo" src="about.png" alt="photo de profil" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-12 mt-16 sm:mt-0 sm:gap-24">
        <Technos />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

export default App;
