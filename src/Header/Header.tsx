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
        className={`tab transition-all hover:font-bold text-primary ${
          active === name ? "tab-active font-bold" : ""
        } max-sm:text-xs`}
        onClick={(event) => {
          event.preventDefault();
          handleClick(name);
          const element = document.getElementById(link);
          if (element) {
            const offsetTop = element?.offsetTop - 100;
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
            const fileName = "CV-de-Can-KAYA.pdf";
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
    <header className="navbar bg-base-100 mb-10 sticky top-0 z-10 flex justify-between max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-y-3 max-sm:mb-5">
      <button
        className="btn btn-secondary btn-sm normal-case text-white transition-all hover:btn-md"
        onClick={downloadCV}
      >
        Télécharger CV <FontAwesomeIcon icon={faArrowDown} bounce />
      </button>
      <div role="tablist" className="tabs tabs-bordered">
        {generateLink("technos", "Technos")}
        {generateLink("skills", "Compétences")}
        {generateLink("projects", "Projets")}
        {generateLink("contact", "Contact")}
      </div>
    </header>
  );
}

export default Header;
