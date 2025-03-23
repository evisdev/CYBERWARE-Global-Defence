import React from "react";
import styles from "./Industries.module.scss";
import industriesData from "./industriesdata";
import emailIcon from "../../assets/images/footer/email-icon.svg";

const Industries = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Industries we <span className={styles.highlight}>protect</span>
        </h1>
        <p>
          We continuously enhance our services to adapt to the ever-changing cyber landscape. Our commitment is to provide top-tier <br /> solutions to protect your data and operations, regardless of your industry.
        </p>
      </div>
      {industriesData.map((industry, index) => (
        <div key={index} className={styles.newSection}>
          <img src={industry.image} alt={industry.title || "Email Icon"} className={styles.newSectionImage} />
          {industry.title && <h2 className={styles.subtitle}>{industry.title}</h2>}
          {industry.description && <p>{industry.description}</p>}
          {industry.title && <button className={styles.seeMoreButton}>See More</button>}
        </div>
      ))}
      <div className={styles.section2}>
        <div className={styles.text2}>
        <h3 className={styles.text3}>Not sure if we cover your industry?</h3>
          Cyber threats are constantly evolving, and every industry faces unique challenges. If you don’t see your sector listed or want to learn more about how we can tailor our solutions to your specific needs, we’re here to help. Contact us today, and let’s discuss how we can protect your business
        </div>
        <div className={styles.emailForm}>
          <div className={styles.emailInputContainer}>
            <img src={emailIcon} alt="Email Icon" className={styles.emailIcon} />
            <input type="email" placeholder="Your Email Address" className={styles.emailInput} />
          </div>
          <button className={styles.joinButton}>Join For Free</button>
        </div>
      </div>
    </>
  );
};

export default Industries;