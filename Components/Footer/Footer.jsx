import React from 'react';
import styles from '../../styles/Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerData}>
          <h2 className={styles.footerTitle}>REY ADRIAN</h2>
          <p className={styles.footerText}>I'm Rey Adrian Inday and this is my portfolio website</p>
        </div>

        <div className={styles.footerData}>
          <h2 className={styles.footerTitle}>EXPLORE</h2>
          <ul>
            <li><a href="#home" className={styles.footerLink}>Home</a></li>
            <li><a href="#about" className={styles.footerLink}>About</a></li>
            <li><a href="#resume" className={styles.footerLink}>Resume</a></li>
            <li><a href="#portfolio" className={styles.footerLink}>Portfolio</a></li>
            <li><a href="#contact" className={styles.footerLink}>Contact</a></li>
          </ul>
        </div>

        <div className={`${styles.footerData} ${styles.flex} ${styles.flexCol} ${styles.itemsCenter} ${styles.justifyCenter}`}>
          <div style={{ marginBottom: '10px' }}>
            <h2 className={styles.footerTitle}>FOLLOW ME</h2>
          </div>
          <div>
            <a href="https://www.facebook.com/rey.adriaan" target="_blank" className={styles.footerSocial}><FontAwesomeIcon className={styles.fbIcon} icon={faFacebook} size="2x"/></a>
            <a href="https://www.instagram.com/reyadriaan/" target="_blank" className={styles.footerSocial}><FontAwesomeIcon className={styles.igIcon} icon={faInstagram} size="2x" /></a>
            <a href="https://www.linkedin.com/in/indayreyadrian" target="_blank" className={styles.footerSocial}><FontAwesomeIcon className={styles.linkedIcon} icon={faLinkedin} size="2x" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
