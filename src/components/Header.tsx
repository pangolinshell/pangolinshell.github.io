import { useState } from "react";
import { FaAlignJustify, FaXmark } from "react-icons/fa6";
import "./Header.scss";

function BrutalistHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="top-row">
        <div className="logo">ROMANN.DEV</div>

        <button
          className="menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaXmark /> : <FaAlignJustify />}
        </button>
      </div>

      <nav className={`nav ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(false)}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default BrutalistHeader;