import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content fixed bottom-0">
      <aside className="items-center grid-flow-col">
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link to="https://linkedin.com/in/canoral74" className="link-linkedin" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} bounce size="lg" />
        </Link>
        <Link to="https://github.com/canoral" className="link-github" target="_blank">
          <FontAwesomeIcon icon={faGithub} bounce size="lg" />
        </Link>
        <Link to="https://www.instagram.com/dogancan__kaya" className="link-instagram" target="_blank">
          <FontAwesomeIcon icon={faInstagram} bounce size="lg" />
        </Link>
        <Link to="mailto:info.canoral@gmail.com" className="link-gmail">
          <FontAwesomeIcon icon={faEnvelope} bounce size="lg" />
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
