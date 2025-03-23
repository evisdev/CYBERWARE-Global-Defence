import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Industries.module.scss";
import videogif from "../../../../assets/images/industriesweserve/video.gif";
import education from "../../../../assets/images/industries/education.svg";
import egame from "../../../../assets/images/industries/egame.svg";
import finance from "../../../../assets/images/industries/finance.svg";
import government from "../../../../assets/images/industries/goverment.svg";
import healthcare from "../../../../assets/images/industries/healthcare.svg";
import retail from "../../../../assets/images/industries/retail.svg";

const IndustriesWeServe = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.text}>
                    <div className={styles.textContent}>"Always On Guard: Your 24/7 <br /> Online Security Solution for <br /> Unmatched Protection"</div>
                    <Link to="/services/security-awareness-training" className={styles.buttonPrimary}>Explore Our Services</Link>
                    <Link to="/contact-us" className={styles.buttonSecondary}>Book a Demo</Link>
                </div>
                <div className={styles.video}>
                    <img src={videogif} alt="" />
                </div>
            </div>
            <div className={styles.industries}>Industries We Serve</div>
            <div className={styles.solutions}>
                Protecting Critical Industries with Cutting-Edge Cybersecurity Solutions
            </div>
            <div className={styles.icons}>
                <Link to="/industries#finance" className={styles.iconContainer}>
                    <img src={finance} alt="Finance" className={styles.icon} />
                    <p>Finance</p>
                </Link>
                <hr className={styles.horizontalLine} />
                <Link to="/industries#healthcare" className={styles.iconContainer}>
                    <img src={healthcare} alt="Healthcare" className={styles.icon} />
                    <p>Healthcare</p>
                </Link>
                <hr className={styles.horizontalLine} />
                <Link to="/industries#government" className={styles.iconContainer}>
                    <img src={government} alt="Government" className={styles.icon} />
                    <p>Government</p>
                </Link>
                <hr className={styles.horizontalLine} />
                <Link to="/industries#retail" className={styles.iconContainer}>
                    <img src={retail} alt="Retail" className={styles.icon} />
                    <p>Retail</p>
                </Link>
                <hr className={styles.horizontalLine} />
                <Link to="/industries#egame" className={styles.iconContainer}>
                    <img src={egame} alt="E-game" className={styles.icon} />
                    <p>E-game</p>
                </Link>
                <hr className={styles.horizontalLine} />
                <Link to="/industries#education" className={styles.iconContainer}>
                    <img src={education} alt="Education" className={styles.icon} />
                    <p>Education</p>
                </Link>
            </div>

            <div className={styles.getStartedContainer}>
                <Link to="/industries" className={styles.buttonGetStarted}>Get Started</Link>
            </div>
            <hr className={styles.horizontalLineAlt} />
        </>
    );
}

export default IndustriesWeServe;