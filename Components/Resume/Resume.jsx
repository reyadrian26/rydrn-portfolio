import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/Resume.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import ResumeData from "./ResumeData";
import react from "../../public/assets/react-logo.png";
import nextjs from "../../public/assets/nextjs-logo.png";
import html from "../../public/assets/html-logo.png";
import css from "../../public/assets/css-logo.png";
import javascript from "../../public/assets/javascript-logo.png";
import Image from "next/image";

const Skills = ({ skillsData }) => {
  const { ref: skillsRef, inView: mySkillsIsVisible } = useInView();
  const [animatedSkillsOnce, setAnimatedSkillsOnce] = useState(false);

  useEffect(() => {
    if (mySkillsIsVisible && !animatedSkillsOnce) {
      setAnimatedSkillsOnce(true);
    }
  }, [mySkillsIsVisible, animatedSkillsOnce]);

  return (
    <div className={styles.skillsContainer} ref={skillsRef}>
      <h3
        className={`${styles.resumeHeader} ${
          animatedSkillsOnce ? styles.animateResumeHeader : ""
        }`}
      >
        TECHNICAL SKILLS
      </h3>
      {/* {skillsData.map((skill, index) => (
      <div key={index}>
        <p className={styles.skillsText}>{skill.name}</p>
        <div className={styles.container}>
          <div className={`${styles.skills} ${styles[skill.level]}`}>
            {skill.percentage}
          </div>
        </div>
      </div>
    ))} */}

      <div className={styles.skillLogoContainer}>
        <div
          className={`${styles.skillLogo} ${
            animatedSkillsOnce ? styles.animateLogo1 : ""
          }`}
        >
          <Image className={styles.skillImg} src={react} alt="React" />
          <h3 className={styles.skillName}>React</h3>
        </div>
        <div className={`${styles.skillLogo} ${
            animatedSkillsOnce ? styles.animateLogo2 : ""
          }`}>
          <Image className={styles.skillImg} src={nextjs} alt="Next JS" />
          <h3 className={styles.skillName}>NextJS</h3>
        </div>
        <div className={`${styles.skillLogo} ${
            animatedSkillsOnce ? styles.animateLogo3 : ""
          }`}>
          <Image className={styles.skillImg} src={html} alt="HTML" />
          <h3 className={styles.skillName}>HTML</h3>
        </div>
        <div className={`${styles.skillLogo} ${
            animatedSkillsOnce ? styles.animateLogo4 : ""
          }`}>
          <Image className={styles.skillImg} src={css} alt="CSS" />
          <h3 className={styles.skillName}>CSS</h3>
        </div>
        <div className={`${styles.skillLogo} ${
            animatedSkillsOnce ? styles.animateLogo5 : ""
          }`}>
          <Image
            className={styles.skillImg}
            src={javascript}
            alt="JavaScript"
          />
          <h3 className={styles.skillName}>JavaScript</h3>
        </div>
      </div>
    </div>
  );
};

const Education = ({ educationData }) => {
  const { ref: skillsRef, inView: mySkillsIsVisible } = useInView();
  const [animatedSkillsOnce, setAnimatedSkillsOnce] = useState(false);

  useEffect(() => {
    if (mySkillsIsVisible && !animatedSkillsOnce) {
      setAnimatedSkillsOnce(true);
    }
  }, [mySkillsIsVisible, animatedSkillsOnce]);

  return (
  <div className={styles.educContainer} ref={skillsRef}>
    <h3 className={`${styles.resumeHeader} ${
          animatedSkillsOnce ? styles.animateEducHeader : ""
        }`}>EDUCATIONAL BACKGROUND</h3>
    <div className={styles.resumeContent}>
      {educationData.map((item, index) => (
        <div key={index} className={`${styles.box} ${
          animatedSkillsOnce ? styles.animateEducBox : ""
        }`}> 
          <h6>{item.year}</h6>
          <h4>{item.degree}</h4>
          <p>{item.major}</p>
          <h5>
            <FontAwesomeIcon icon={faGraduationCap} /> {item.institution}
          </h5>
          {item.achievement && (
            <h5 className={styles.achievement}>
              <FontAwesomeIcon icon={faMedal} className={styles.medalIcon} />
              {item.achievement}
            </h5>
          )}
        </div>
      ))}
    </div>
  </div>
);
};


// const Hobbies = ({ hobbiesData }) => (
//   <div>
//     <div className={styles.hobbiesContainer}>
//       <h3 className={styles.resumeHeader}>HOBBIES AND INTERESTS</h3>
//     </div>
//     <div className={styles.hobbiesList}>
//       <ul>
//         {hobbiesData.map((hobby, index) => (
//           <li key={index}>
//             <FontAwesomeIcon icon={hobby.icon} className={styles.hobbiesIcon} />
//             {hobby.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
// );

const Resume = () => (
  <section className={styles.resume} id="resume">
    <Skills skillsData={ResumeData.skills} />
    <Education educationData={ResumeData.education} />
    {/* <Hobbies hobbiesData={ResumeData.hobbies} /> */}
  </section>
);

export default Resume;
