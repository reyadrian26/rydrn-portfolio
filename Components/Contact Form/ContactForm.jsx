import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../../styles/Contact.module.scss";
const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_sd4ei4s", "template_vjb46lv", form.current, {
        publicKey: "o1drqM-YxO4o2QNxa",
      })
      .then(
        (result) => {
          console.log(result.text);
          window.alert("Message Sent");
        },
        (error) => {
          console.log("Failed to send message...", error.text);
          window.alert("Failed to send message");
        }
      );
  };

  return (
    <div className={styles.contactForm}>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <input type="text" name="user_name" placeholder="Name" />
        <input type="email" name="user_email" placeholder="Email" />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
          className={styles.textarea}
        />
        <button type="submit" className={styles.btn} value="Send">
          SEND
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
