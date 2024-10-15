import React, { useRef, useEffect } from "react";
import homeStyles from "../styles/Home.module.scss";
import aboutStyles from "../styles/About.module.scss";
import resumeStyles from "../styles/Resume.module.scss";
import experienceStyles from "../styles/Experience.module.scss"
import portfolioStyles from "../styles/Portfolio.module.scss";
import contactStyles from "../styles/Contact.module.scss";
const ScrollRevealComponent = ({ children }) => {
  const revealRef = useRef(null);

  useEffect(() => {

    if (typeof document !== "undefined") {
      const ScrollReveal = require("scrollreveal").default;
      const sr = ScrollReveal({
        distance: "10px",
        duration: 1500,
        reset: true,
      });

      sr.reveal(`.${homeStyles.homeText}`, { delay: 100, origin: "top" });
      sr.reveal(`.${homeStyles.img1}`, { delay: 100, origin: "top" });
      sr.reveal(`.${aboutStyles.about}`, { delay: 100, origin: "top" });
      sr.reveal(`.${resumeStyles.resume}`, { delay: 100, origin: "top" });
      sr.reveal(`.${experienceStyles.experience}`, { delay: 100, origin: "top" });
      sr.reveal(`.${portfolioStyles.slider}`, { delay: 100, origin: "top" });
      sr.reveal(`.${contactStyles.contact}`, { delay: 100, origin: "top" });
    }
  }, []);

  return <div ref={revealRef}>{children}</div>;
};

export default ScrollRevealComponent;
