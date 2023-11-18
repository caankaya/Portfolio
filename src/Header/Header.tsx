import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [active, setActive] = useState("À Propos");

  const handleClick = (e: string) => {
    setActive(e);
  };

  const generateLink = (to: string, name: string) => {
    return (
      <Link
        to={`/#${to}`}
        className={`tab ${active === name ? "tab-active" : ""}`}
        onClick={() => {
          handleClick(name);
        }}
      >
        {name}
      </Link>
    );
  };

  return (
    <div className="navbar bg-base-100 sticky top-0">
      <div className="w-10 rounded-full">
        <img alt="Tailwind CSS Navbar component" src="about.png" className="rounded-full" />
      </div>
      <div role="tablist" className="tabs tabs-bordered ml-auto">
        {generateLink("about", "À Propos")}
        {generateLink("projects", "Projets")}
        {generateLink("contact", "Contact")}
      </div>
    </div>
  );
}

export default Header;
