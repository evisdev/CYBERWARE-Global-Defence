import React from 'react';
import HeroBg from "../../../../components/HeroBg/HeroBg";
import styles from "./Hero.module.scss";
import freeConsultation from "../../../../assets/home/free-consultation.svg";
import classNames from "classnames";

const Hero = ({backgroundImage}) => {
    return (
        <HeroBg backgroundImage={backgroundImage}>
            <div className="container">
                <div className={styles.homeHeroContainerNew}>
                    <p className={styles.textTopNew}>
                        Your Cybersecurity Experts <span>Securing the Future Today</span>
                    </p>

                    <h1 className={styles.mainTitleNew}>Tailored,<span> AI-driven solutions</span> to<br/> protect
                        your
                        business <q className={styles.titleTextNew}>Protecting the digital future through
                            innovative
                            cybersecurity
                            solutions, we empower businesses
                            to safeguard their assets, ensure compliance, and maintain trust in an increasingly
                            connected
                            world.</q></h1>

                    <div className={styles.btnContainerNew}>
                        <a target="_blank" href="/services/security-awareness-training" className={styles.freeConsultationBtnNew}>
                            <img src={freeConsultation} alt="free consultation button"/>
                            <span>Free Consultation</span></a>
                        <a target="_blank" href="/contact-us" className={classNames("main-btn")}>
                            Get Started Today</a>
                    </div>

                    <div className={styles.linksBottomBoxNew}>
                        <a className={styles.bottomLinkNew} href="/industries#finance">Finance</a>
                        <a className={styles.bottomLinkNew} href="/industries#healthcare">Healthcare</a>
                        <a className={styles.bottomLinkNew} href="/industries#government">Government</a>
                        <a className={styles.bottomLinkNew} href="/industries#retail">Retail</a>
                        <a className={styles.bottomLinkNew} href="/industries#egame">Game</a>
                        <a className={styles.bottomLinkNew} href="/industries#education">Education</a>
                    </div>

                </div>
            </div>
        </HeroBg>
    );
};

export default Hero;