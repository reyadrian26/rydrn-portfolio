import React, { useState, useEffect, useRef } from "react";
import styles from '../../styles/Portfolio.module.scss';
import { SliderData } from './SliderData';
import Image from 'next/image';
import { useInView } from "react-intersection-observer";

const Portfolio = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const { ref: portfolioRef, inView: myPortfolioIsVisible } = useInView();
  const [animatedPortfolioOnce, setAnimatedPortfolioOnce] = useState(false);

  useEffect(() => {
    if (myPortfolioIsVisible && !animatedPortfolioOnce) {
      setAnimatedPortfolioOnce(true);
    }
  }, [myPortfolioIsVisible, animatedPortfolioOnce]);

  return (
    <section className={styles.slider} id = 'portfolio'>
      <div className={styles.centerPortfolio} ref={portfolioRef}>
        <h3>PROJECTS AND COURSEWORKS</h3>
      </div>
      <div className={`${styles.slideContainer} ${
            animatedPortfolioOnce ? styles.animateSliderContainer : ""
          }`}> 
        <a className={styles.leftArrow} onClick={prevSlide}>❮</a>
        <a className={styles.rightArrow} onClick={nextSlide}>❯</a>
        {SliderData.map((slide, index) => {
            return (
              <div className={`${styles.slide} ${index === current ? styles.active : ''}`} key={index}>
                {index === current && (
                  <div>
                    <h2 className = {styles.slideNumber}>{slide.number}</h2>
                    <Image src={slide.image} alt={slide.text} className={styles.image} />
                    <h2 className ={styles.slideText}>{slide.text}</h2>
                  </div>
                )}
              </div>
            );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
