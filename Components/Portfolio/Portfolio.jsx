import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/Portfolio.module.scss";
import { SliderData } from "./SliderData";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import github from "../../public/assets/projects-resized.png";

const Portfolio = ({ slides }) => {
  // const [current, setCurrent] = useState(0);
  // const length = slides.length;

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };

  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }

  const { ref: portfolioRef, inView: myPortfolioIsVisible } = useInView();
  const [animatedPortfolioOnce, setAnimatedPortfolioOnce] = useState(false);

  useEffect(() => {
    if (myPortfolioIsVisible && !animatedPortfolioOnce) {
      setAnimatedPortfolioOnce(true);
    }
  }, [myPortfolioIsVisible, animatedPortfolioOnce]);

  useEffect(() => {
    console.log(slides);
  }, [slides]);

  return (
    <section className={styles.slider} id="portfolio">
      <div className={styles.centerPortfolio} ref={portfolioRef}>
        <h3>PROJECTS AND COURSEWORKS</h3>
      </div>

      <section className="articles">
        {slides.map((slide, index) => (
          <article key={index}>
            <div className="article-wrapper">
              <figure>
                <Image src={slide.image} alt={slide.title} />
              </figure>
              <div className="article-body">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>

                <div className={styles.viewProjectBtn}>
                  <div className={styles.githubBtn}>
                    <a
                      href={slide.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h4>GitHub</h4>
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                  </div>

                  {slide.title !== "PUP Quality Management System Portal" && (
                    <div className={styles.demoBtn}>
                      <a
                        href={slide.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h4>Demo</h4>
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          size="lg"
                        />
                      </a>
                    </div>
                  )}
                </div>
                <span className="sr-only"> {slide.title}</span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Portfolio;
