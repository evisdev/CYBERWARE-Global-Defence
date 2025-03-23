import React from "react";
import styles from "./ContactUs.module.scss";

const ContactUs = () => {
  return (
    <div className={styles.contactForm}>
      <h1 className={styles.pageTitle}>Your Cybersecurity Experts – Securing the Future Today</h1>
      <div className={styles.contactFormContainer}>
        <div className={styles.contactFormLeft}>
          <h1 className={styles.contactFormTitle}>Contact Us.</h1>
          <p className={styles.contactFormSubtitle}>We are here to help you secure your future</p>

          <div className={styles.contactFormInfo}>
            <p>Email: info@cyberg.com</p>
            <p>Phone: +49 123 456 789</p>
            <p>Address: Street, Berlin Germany</p>
          </div>

          <div className={styles.contactFormNext}>
            <h2>What happens next?</h2>
            <div className={styles.contactFormSteps}>
              <div className={styles.contactFormStep}>
                <div className={styles.contactFormStepNumber}>1</div>
                <p>We'll review your cybersecurity needs.</p>
              </div>
              <div className={styles.contactFormStep}>
                <div className={styles.contactFormStepNumber}>2</div>
                <p>You'll receive a customized security proposal</p>
              </div>
              <div className={styles.contactFormStep}>
                <div className={styles.contactFormStepNumber}>3</div>
                <p>Once approved, we'll implement the solutions and support you</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contactFormRight}>
          <form>
            <div className={styles.contactFormField}>
              <label htmlFor="name">Full name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>

            <div className={styles.contactFormField}>
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" placeholder="Your Email Address" />
            </div>

            <div className={styles.contactFormField}>
              <label htmlFor="phone">Telephone number</label>
              <input type="tel" id="phone" placeholder="Your phone number" />
            </div>

            <div className={styles.contactFormField}>
              <label htmlFor="country">Select your country</label>
              <input className={styles.formControl} list="countryOptions" id="country" placeholder="Your Country" />
              <datalist id="countryOptions">
                <option value="Albania" />
                <option value="Germany" />
                <option value="Macedonia" />
                <option value="Turkey" />
              </datalist>
            </div>

            <div className={styles.contactFormField}>
              <label for="message">Send us a Message</label>
              <textarea id="message" placeholder="Write your message here..."></textarea>
            </div>

            <button type="submit" className={styles.contactFormSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;