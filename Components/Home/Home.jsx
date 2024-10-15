import React from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import img from "../../public/assets/homepage-img5.png";
import Image from "next/image";

const Home = () => {
  return (
    <section className={styles.home} id="home">
      <Head>
        <title>RYDRN | Portfolio</title>
      </Head>
      <div className={`${styles.homeText} ${styles.animateHomeText}`}> 
        <h5>Hello, I am</h5>
        <h1>Rey Adrian Inday</h1>
        <h6>
          I'm a <span className={styles.span}>Frontend Web Developer</span>
        </h6>
        <p>
          Welcome to my portfolio! I am an aspiring web developer and I am
          excited to share my projects and skills with you.
        </p>
        <a href="#about" className={styles.btn}>
          Learn More
        </a>
      </div>

      <div className={`${styles.homeImg} ${styles.animateHomeImg}`}> 
        <Image className={styles.img1} src={img} alt="My Picture" />
      </div>
    </section>
  );
};

export default Home;
