import React from 'react';
import styles from "./Certifications.module.scss";
import { certifications } from "./certificationsdata";

const Certifications = () => {
    return (
        <div id='certifications'>
            <div className={styles.servicesBox}>
                <div className="container">
                    <h2 className={styles.title}>Our certifications</h2>
                    <div className={styles.servicesContainer}>
                        {
                            certifications.map((item, index) => {
                                return (
                                    <div key={index} className={styles.serviceItem}>
                                        <img src={item.img} alt={item.title}/>
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                        <a className={"main-btn"} href={item.link}>{item.btn}</a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certifications;