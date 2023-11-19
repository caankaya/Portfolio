import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="w-full">
      <h2 className="mb-8 sm:mb-10 text-4xl text-center font-extrabold">Contact</h2>
      <div className="flex flex-col items-center gap-4">
        <p>N'hésitez pas à me contacter par email ou via mes réseaux sociaux.</p>
        <div className="flex flex-wrap gap-2">
          <div className="button-groupe">
            <button className="btn btn-secondary text-white btn-sm normal-case mr-2">
              <Link to="https://github.com/canoral" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="lg" style={{ marginRight: "5px" }} />
                Github
              </Link>
            </button>
            <button className="btn btn-secondary text-white btn-sm normal-case mr-2">
              <Link to="https://linkedin.com/in/canoral74" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="lg" style={{ marginRight: "5px" }} />
                LinkedIn
              </Link>
            </button>
            <button className="btn btn-secondary text-white btn-sm normal-case mr-2">
              <Link to="https://www.instagram.com/dogancan__kaya/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="lg" style={{ marginRight: "5px" }} />
                Instagram
              </Link>
            </button>
            <button className="btn btn-secondary text-white btn-sm normal-case">
              <Link to="mailto:info.canoral@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size="lg" style={{ marginRight: "5px" }} />
                info.canoral@gmail.com
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
