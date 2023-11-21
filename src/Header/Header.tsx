import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Header() {
  const [active, setActive] = useState("Technologies");

  const handleClick = (e: string) => {
    setActive(e);
    // Appeler la fonction scrollToLine lorsque vous changez d'onglet
  };

  const generateLink = (link: string, name: string) => {
    return (
      <a
        href={`#${link}`}
        className={`tab ${active === name ? "tab-active" : ""}`}
        onClick={(event) => {
          event.preventDefault();
          handleClick(name);
          const element = document.getElementById(link);
          if (element) {
            const offsetTop = element?.offsetTop - 80;
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
          }
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
    <div className="navbar bg-base-100 mb-10 sm:sticky sm:top-0 sm:z-10 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-y-3 max-sm:mb-0">
      <button className="btn btn-secondary btn-sm normal-case text-white" onClick={downloadCV}>
        Télécharger CV <FontAwesomeIcon icon={faArrowDown} bounce />
      </button>
      <div role="tablist" className="tabs tabs-bordered sm:ml-auto">
        {generateLink("technos", "Technologies")}
        {generateLink("skills", "Compétences")}
        {generateLink("projects", "Projets")}
        {generateLink("contact", "Contact")}
      </div>
    </div>
  );
}

export default Header;
