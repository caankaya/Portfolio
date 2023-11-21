import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="w-full" id="contact">
      <h2 className="mb-8 sm:mb-10 text-4xl text-center font-extrabold">Contact</h2>
      <div className="flex flex-col items-center gap-4">
        <p className="text-center">N'hésitez pas à me contacter par email ou via mes réseaux sociaux.</p>
        <div className="flex flex-wrap gap-2">
          <div className="button-groupe flex gap-2 max-sm:flex max-sm:flex-col max-sm:gap-y-2">
            <Link
              to="https://github.com/canoral"
              target="_blank"
              className="bg-secondary px-2 py-1 font-semibold rounded-md"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" style={{ marginRight: "5px" }} />
              Github
            </Link>

            <Link
              to="https://linkedin.com/in/canoral74"
              target="_blank"
              className="bg-secondary px-2 py-1 font-semibold rounded-md"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" style={{ marginRight: "5px" }} />
              LinkedIn
            </Link>

            <Link
              to="https://www.instagram.com/dogancan__kaya/"
              target="_blank"
              className="bg-secondary px-2 py-1 font-semibold rounded-md"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" style={{ marginRight: "5px" }} />
              Instagram
            </Link>

            <Link to="mailto:info.canoral@gmail.com" className="bg-secondary px-2 py-1 font-semibold rounded-md">
              <FontAwesomeIcon icon={faEnvelope} size="lg" style={{ marginRight: "5px" }} />
              info.canoral@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
