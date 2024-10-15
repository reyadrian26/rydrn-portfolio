import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faHouse } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../Contact Form/ContactForm';
import styles from '../../styles/Contact.module.scss'
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref: contactRef, inView: myContactIsVisible } = useInView();
  const [animatedContactOnce, setAnimatedContactOnce] = useState(false);

  useEffect(() => {
    if (myContactIsVisible && !animatedContactOnce) {
      setAnimatedContactOnce(true);
    }
  }, [myContactIsVisible, animatedContactOnce]);

  return (
    <section className={styles.contact}id="contact">
      <div className={styles.centerContact}> 
        <h3>CONTACT</h3>
      </div>

      <div className={styles.contactContainer} ref={contactRef}>
        <div className={`${styles.contactInfo} ${
            animatedContactOnce ? styles.animateContactInfo : ""
          }`}> 
          <div className={styles.contactHeader}>
            <FontAwesomeIcon icon={faEnvelope} />
            <h3 className={styles.contactSubtitle}>EMAIL</h3>
          </div>
          <p>indayreyadrian@gmail.com</p>

          <div className={styles.contactHeader}>
            <FontAwesomeIcon icon={faPhone} />
            <h3 className={styles.contactSubtitle}>PHONE</h3>
          </div>
          <p>0949-925-7385</p>

          <div className={styles.contactHeader}>
            <FontAwesomeIcon icon={faHouse} />
            <h3 className={styles.contactSubtitle}>ADDRESS</h3>
          </div>
          <p>Valenzuela City, Metro Manila, Philippines</p>
        </div>

        <div className={`${styles.contactFormContainer} ${
            animatedContactOnce ? styles.animateContactForm : ""
          }`}> 
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
