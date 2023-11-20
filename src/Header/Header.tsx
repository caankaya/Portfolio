import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Header() {
  const [active, setActive] = useState("À Propos");

  const handleClick = (e: string) => {
    setActive(e);
  };

  const generateLink = (link: string, name: string) => {
    return (
      <a
        href={`/#${link}`}
        className={`tab ${active === name ? "tab-active" : ""}`}
        onClick={() => {
          handleClick(name);
        }}
      >
        {name}
      </a>
    );
  };

  const downloadCV = () => {
    const url = "/CV.pdf";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          response.blob().then((blob) => {
            const fileName = "Mon_CV.pdf";
            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = fileName;
            link.click();
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="navbar bg-base-100 mb-10 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-y-3 max-sm:mb-0">
      <button className="btn btn-secondary btn-sm normal-case text-white" onClick={downloadCV}>
        Télécharger CV <FontAwesomeIcon icon={faArrowDown} bounce />
      </button>
      <div role="tablist" className="tabs tabs-bordered sm:ml-auto">
        {generateLink("technos", "Téchnos")}
        {generateLink("skills", "Skills")}
        {generateLink("projects", "Projets")}
        {generateLink("contact", "Contact")}
      </div>
    </div>
  );
}

export default Header;
