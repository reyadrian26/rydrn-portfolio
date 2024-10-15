import React, { useState, useEffect } from "react";
import logo from "../../public/assets/website-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Navbar.module.scss";
import Image from "next/image";
const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleMenuClick = () => {
    const navbar = document.querySelector(`.${styles.navList}`);
    navbar.classList.toggle(`${styles.active}`);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <nav className={`${styles.nav} ${styles.animateNavbarContainer}`}>
      <div className={styles.headerLogo}>
        <Image src={logo} alt="header-logo" className={styles.logo} />
        <a href="#" className={styles.brand}>
          RY<span className={styles.span}>DRN</span>
        </a>
      </div>

      <FontAwesomeIcon
        icon={faBarsStaggered}
        id="menu-icon"
        size="2xs"
        className={styles.menuicon}
        onClick={handleMenuClick}
      />

      <ul className={styles.navList}>
        <li
          className={`${styles.navItem} ${
            activeSection === "home" ? styles.active : ""
          }`}
        >
          <a
            href="#home"
            onClick={() => handleSectionChange("home")}
            className={styles.anchor}
          >
            Home
          </a>
        </li>
        <li
          className={`${styles.navItem} ${
            activeSection === "about" ? styles.active : ""
          }`}
        >
          <a
            href="#about"
            onClick={() => handleSectionChange("about")}
            className={styles.anchor}
          >
            About
          </a>
        </li>
        <li
          className={`${styles.navItem} ${
            activeSection === "resume" ? styles.active : ""
          }`}
        >
          <a
            href="#resume"
            onClick={() => handleSectionChange("resume")}
            className={styles.anchor}
          >
            Skills
          </a>
        </li>
        <li
          className={`${styles.navItem} ${
            activeSection === "portfolio" ? styles.active : ""
          }`}
        >
          <a
            href="#portfolio"
            onClick={() => handleSectionChange("portfolio")}
            className={styles.anchor}
          >
            Portfolio
          </a>
        </li>
        <li
          className={`${styles.contactBtn} ${styles.contactBtn} ${
            activeSection === "contact" ? styles.active : ""
          }`}
        >
          <a
            href="#contact"
            onClick={() => handleSectionChange("contact")}
            className={styles.anchor}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
