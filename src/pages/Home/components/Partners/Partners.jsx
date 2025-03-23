import React, { useState } from "react";
import styles from "./Partners.module.scss";
import netflix from "../../../../assets/icons/netflix.svg";
import amazon from "../../../../assets/icons/amazon.svg";
import db from "../../../../assets/icons/db.svg";
import microsoft from "../../../../assets/icons/microsoft.svg";
import brainster from "../../../../assets/icons/brainster.svg";
import google from "../../../../assets/icons/google.svg";
import iso from "../../../../assets/icons/iso.svg";
import rightArrow from "../../../../assets/icons/arrow-down-orange.svg";
import emailIcon from "../../../../assets/images/footer/email-icon.svg";

const Partners = () => {
  const [showThankYouContact, setShowThankYouContact] = useState(false);
  const [showThankYouNewsletter, setShowThankYouNewsletter] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setShowThankYouContact(true);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setShowThankYouNewsletter(true);
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.partners}>
          <h2>Our Partners</h2>
          <div className={styles.icons}>
            <img src={brainster} alt="Brainster" />
            <img src={microsoft} alt="Microsoft" />
            <img src={netflix} alt="Netflix" />
            <img src={db} alt="DB" />
            <img src={amazon} alt="Amazon" />
            <img src={google} alt="Google" />
          </div>
        </div>

        <div className={styles.contactContainer}>
          <p className={styles.contactText}>
            Reach out to our team at CGD, and we'll help <br /> you protect your digital future.
          </p>
          <form className={styles.contactForm} onSubmit={handleContactSubmit}>
            <input type="email" placeholder="Email Address" className={styles.emailInput} required />
            <button type="submit" className={styles.submitButton}>Submit</button>
          </form>
          {showThankYouContact && <p className={styles.thankYouMessage}>Thank you for reaching out!</p>}
        </div>
      </div>

      <div className={styles.isoSection}>
        <div className={styles.isoContainer}>
          <img src={iso} alt="ISO Certification" className={styles.isoIcon} />
          <div className={styles.isoText}>
            <h3 className={styles.isoTitle}>ISO Certification</h3>
            <p className={styles.isoDescription}>
              At CYBERWARE Global Defense, we are proud to be ISO certified, demonstrating our commitment to the highest standards of cybersecurity. Our certification reflects our dedication to protecting your data and ensuring robust security practices across all operations. Trust us to safeguard your digital assets with proven excellence.
            </p>
            <div className={styles.isoDetails}>
              <p>ISO/IEC 27000 — Information security management systems <img src={rightArrow} alt="Right Arrow" className={styles.rightArrow} /></p>
              <p>ISO/IEC 27001 — Information technology - Security Techniques - Information security management <img src={rightArrow} alt="Right Arrow" className={styles.rightArrow} /></p>
              <p>ISO/IEC 27002 — Code of practice for information security controls <img src={rightArrow} alt="Right Arrow" className={styles.rightArrow} /></p>
            </div>
            <a href="/about-us#certifications" className={styles.seeAllButton}>See All Certifications</a>
            </div>
          <div className={styles.section2}>
            <div className={styles.text2}>Stay informed with the latest threat insights delivered directly to your inbox through our Newsletter.</div>
            <form className={styles.emailForm} onSubmit={handleNewsletterSubmit}>
              <div className={styles.emailInputContainer}>
                <img src={emailIcon} alt="Email Icon" className={styles.emailIcon} />
                <input type="email" placeholder="Your Email Address" className={styles.emailInput} required />
              </div>
              <button type="submit" className={styles.joinButton}>Join For Free</button>
            </form>
            {showThankYouNewsletter && <p className={styles.thankYouMessage}>Thank you for subscribing!</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;