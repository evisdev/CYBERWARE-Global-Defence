import React from "react";
import styles from "./Customer.module.scss";
import customerData from "./customerdata";
import image1 from "../../../../assets/images/customer/image.svg";
import image2 from "../../../../assets/images/customer/image-2.svg";
import image3 from "../../../../assets/images/customer/image-3.svg";
import star from "../../../../assets/icons/star.svg";

const images = {
  "image-1.svg": image1,
  "image-2.svg": image2,
  "image-3.svg": image3,
};

const Customer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text1}>Join Our Happy Customers</div>
      <div className={styles.carouselContainer}>
        <div id="carousel" className={styles.carousel}>
          {customerData.map((customer, index) => (
            <div key={index} className={styles.testimonial}>
              <img src={images[customer.image]} alt={customer.name} className={styles.image} />
              <div className={styles.verticalLine}></div>
              <div className={styles.textContainer}>
                <p className={styles.text}>{customer.text}</p>
                <div className={styles.nameContainer}>
                  <p className={styles.name}>- {customer.name}</p>
                  <img src={star} alt="Star" className={styles.star} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customer;