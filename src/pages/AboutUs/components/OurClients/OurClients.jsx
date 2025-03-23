import React from "react";
import styles from "./OurClients.module.scss";
import customerData from "./clientsdata";

const OurClients = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text1}>Discover why our clients continue to <br /> choose us.</div>
      <div className={styles.carouselContainer}>
        <div id="carousel" className={styles.carousel}>
          {customerData.map((customer, index) => (
            <div key={index} className={styles.testimonial}>
              <img src={customer.image} alt="" className={styles.image} />
              <div className={styles.verticalLine}></div>
              <div className={styles.textContainer}>
                <p className={styles.text} dangerouslySetInnerHTML={{ __html: customer.text }}></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;