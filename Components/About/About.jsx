import React from "react";
import styles from "../../styles/About.module.scss";
import img from "../../public/assets/Img-2.jpg";
import Image from "next/image";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={`${styles.aboutImg} ${styles.animateAboutImg}`}> 
        <Image className={styles.img2} src={img} alt="About Me Image" />
      </div>

      <div className={`${styles.aboutText} ${styles.animateAboutText}`}> 
        <h3>ABOUT ME</h3>
        <p>
          I recently graduated with a degree of Bachelor of Science in Information Technology
          as an Iskolar ng Bayan at the Polytechnic University of the
          Philippines. I have basic knowledge in programming languages, web
          design, and web development tools. As a developer, I am motivated,
          well-disciplined and is always open to learning more things to improve
          my skills and abilities.
        </p>

        <div className={styles.mainBtn}>
          <a href="#contact" className={styles.btn}>
            Contact Me
          </a>
          <a
            href="./files/RESUME - REY ADRIAN INDAY.pdf"
            download
            className={styles.btn}
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
