import { useState } from "react";
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
          ☰
        </button>
      </div>

      <nav className={`nav ${isOpen ? "open" : ""}`}>
        {/* <a href="#">Home</a> */}
        <a href="#about_me">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

        {/* <button className="header-button">Start</button> */}
      </nav>
    </header>
  );
}

export default BrutalistHeader;