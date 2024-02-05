import { useState } from "react";

import "@/assets/style/front/navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="nav" className="fixed-top nav" role="navigation">
      <span className={`${isMenuOpen ? "d-none" : "d-inline-block"}`}>
        <img
          src="src/assets/image/logo.png"
          className="nav-logo"
          alt="享樂酒店"
        />
      </span>
      <span
        className={`nav-toggle ${isMenuOpen ? "active" : ""}`}
        role="button"
        aria-expanded={isMenuOpen}
        aria-controls="menu"
        onClick={toggleMenu}
      >
        <svg
          className="menuicon"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="40"
          viewBox="0 0 50 50"
        >
          <g>
            <line
              className="menuicon__bar"
              x1="13"
              y1="16.5"
              x2="37"
              y2="16.5"
            />
            <line
              className="menuicon__bar"
              x1="13"
              y1="24.5"
              x2="37"
              y2="24.5"
            />
            <line
              className="menuicon__bar"
              x1="13"
              y1="24.5"
              x2="37"
              y2="24.5"
            />
            <line
              className="menuicon__bar"
              x1="13"
              y1="32.5"
              x2="37"
              y2="32.5"
            />
            {/* <circle className="menuicon__circle" r="23" cx="25" cy="25" /> */}
          </g>
        </svg>
      </span>
      <ul
        className={`nav-menu ${isMenuOpen ? "nav--open" : ""}`}
        id="menu"
        tabIndex={-1}
        aria-label="main navigation"
        // hidden={!isMenuOpen}
      >
        <li className="nav-menu__item">
          <a href="#" className="nav__link">
            客房旅宿
          </a>
        </li>
        <li className="nav-menu__item">
          <a href="#" className="nav__link">
            會員登入
          </a>
        </li>
        <li className="nav-menu__item">
          <a href="#" className="nav__link">
            立即訂房
          </a>
        </li>
      </ul>
      <div className={`splash ${isMenuOpen ? "active" : ""}`}></div>
    </nav>
  );
};

export default Navbar;
