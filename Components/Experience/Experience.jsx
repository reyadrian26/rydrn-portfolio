import styles from "../../styles/Experience.module.scss";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const { ref: experienceRef, inView: myExperienceIsVisible } = useInView();
  const [animatedExperienceOnce, setAnimatedExperienceOnce] = useState(false);

  useEffect(() => {
    if (myExperienceIsVisible && !animatedExperienceOnce) {
      setAnimatedExperienceOnce(true);
    }
  }, [myExperienceIsVisible, animatedExperienceOnce]);

  return (
    <section className={styles.experience} id="experience">
      <div className={styles.experienceContainer} ref={experienceRef}>
        <h3
          className={`${styles.experienceHeader} ${
            animatedExperienceOnce ? styles.animateExperienceHeader : ""
          }`}
        >
          EXPERIENCE
        </h3>

        <div
          className={`${styles.experienceBox} ${
            animatedExperienceOnce ? styles.animateExperienceBox : ""
          }`}
        >
          <div className={styles.experienceContent}>
            <div className={styles.box}>
              <div className={styles.expBoxHeader}>
              <h3>Frontend Web Developer Intern</h3>
                <h6>March 2024 - June 2024</h6>
              </div>
              <h6 className={styles.companyName}>Zynappse Corporation</h6>
              <p>
                &#x2022; Developed interactive and responsive web interfaces
                using React, Next.JS, Semantic UI, and Sass.
              </p>
              <p>
                &#x2022; Completed projects including a portfolio website, an
                article website, and the revamped Zynappse website.
              </p>
              <p>
                &#x2022; Collaborated with co-intern and senior developers,
                gaining hands-on experience with industry-standard tools and
                practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
