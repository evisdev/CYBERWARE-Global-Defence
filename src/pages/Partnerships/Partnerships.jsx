import React from "react";
import styles from "./Parnerships.module.scss";
import { partnerships, partnershipsdata } from "./partnershipsdata";
import image1 from "../../assets/images/customer/image.svg";
import image2 from "../../assets/images/customer/image-2.svg";
import image3 from "../../assets/images/customer/image-3.svg";
import star from "../../assets/icons/star.svg";

const images = {
  "image-1.svg": image1,
  "image-2.svg": image2,
  "image-3.svg": image3,
};

const Partnerships = () => {
  return (
    <div className={styles.partnersSection}>
      <div className={styles.partnersHeader}>
        <h2>
          Meet Our <span className={styles.highlight}>Partners</span> & <span className={styles.highlight}> <br /> Collaborations</span>
        </h2>
        <p className={styles.subheading}>
          At Cyberwave Global Defense, we are proud to collaborate with the following industry leaders and organizations
          to provide the <br /> best cybersecurity solutions to our clients:
        </p>
      </div>
      <div className={styles.largePartnerBox}>
        <div className={styles.imagesRow}>
          <img src={partnerships[0].image} alt="Brainster" className={styles.partnerImage} />
          <img src={partnerships[1].image} alt="Brainster" className={styles.partnerImage} />
        </div>
        <h3 className={styles.partnerTitle}>
          Partnership with <span className={styles.brainster}>Brainster</span>
        </h3>
        <p>Our partnership with Brainster enables us to recruit and train the next generation of cybersecurity professionals. Together, we bring fresh ideas and cutting-edge solutions to the forefront of cyber defense. By combining Brainster’s forward-thinking education programs with our industry expertise, we are building a stronger, more resilient cybersecurity workforce. This collaboration ensures that our team stays ahead of emerging threats, equipped with the skills and knowledge to protect businesses and individuals in an ever-evolving digital landscape.</p>
      </div>
      <div className={styles.newPartnerBox}>
        <img src={partnerships[2].image} alt="Microsoft" className={styles.flexPartnerImage} />
        <div className={styles.flexPartnerContent}>
          <h3 className={styles.partnerTitle1}>
            Partnership with <span className={styles.flexPartner}>Microsoft</span>
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur. Tristique dignissim dolor nunc <br /> sagittis pretium quam amet. Feugiat nisi eget ut convallis ac neque <br /> tristique faucibus integer. Amet donec maecenas vitae sollicitudin neque <br /> mauris etiam. Nibh dictum id ut vestibulum mattis neque cursus. Tortor <br /> eleifend egestas et lorem. Enim nisi non parturient malesuada sed. <br /> Scelerisque massa amet ut diam amet aliquam pulvinar aliquet. Lectus <br /> urna pellentesque eget lorem sed phasellus eget diam. Fermentum orci <br /> interdum ornare libero velit at pellentesque.</p>
        </div>
      </div>
      <div className={styles.cybersecuritySection}>
        <div className={styles.cybersecurityPartnerContent}>
          <h3 className={styles.partnerTitle2}>
            Partnership with <span className={styles.cybersecurityPartner}>Salesforce IQ</span>
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur. Tristique dignissim dolor nunc <br /> sagittis pretium quam amet. Feugiat nisi eget ut convallis ac neque <br /> tristique faucibus integer. Amet donec maecenas vitae sollicitudin neque <br /> mauris etiam. Nibh dictum id ut vestibulum mattis neque cursus. Tortor <br /> eleifend egestas et lorem. Enim nisi non parturient malesuada sed. <br /> Scelerisque massa amet ut diam amet aliquam pulvinar aliquet. Lectus <br /> urna pellentesque eget lorem sed phasellus eget diam. Fermentum orci <br /> interdum ornare libero velit at pellentesque.</p>
        </div>
        <img src={partnerships[2].image} alt="Google" className={styles.cybersecurityPartnerImage} />
      </div>
      <div className={styles.largePartnerBox}>
        <div className={styles.imagesRow}>
          <img src={partnerships[0].image} alt="Brainster" className={styles.partnerImage} />
          <img src={partnerships[1].image} alt="Brainster" className={styles.partnerImage} />
        </div>
        <h3 className={styles.partnerTitle}>
          Partnership with <span className={styles.brainster}>Azure</span>
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur. Tristique dignissim dolor nunc sagittis pretium quam amet. Feugiat nisi eget ut convallis ac neque tristique faucibus integer. Amet donec maecenas vitae sollicitudin neque mauris etiam. Nibh dictum id ut vestibulum mattis neque cursus. Tortor eleifend egestas et lorem. Enim nisi non parturient malesuada sed. Scelerisque massa amet ut diam amet aliquam pulvinar aliquet. Lectus urna pellentesque eget lorem sed phasellus eget diam. Fermentum orci interdum ornare libero velit at pellentesque.</p>
      </div>
      <div className={styles.viewAllPartners}>
        <a href="/about-us" className={styles.viewAllPartnersButton}>View All Partners</a>
      </div>
      <div className={styles.container}>
        <div className={styles.carouselContainer}>
          <div id="carousel" className={styles.carousel}>
            <div className={styles.leftColumn}>
              <div className={styles.testimonial}>
                <img src={images[partnershipsdata[0].image]} alt={partnershipsdata[0].name} className={styles.image} />
                <div className={styles.verticalLine}></div>
                <div className={styles.textContainer}>
                  <p className={styles.text}>{partnershipsdata[0].text}</p>
                  <div className={styles.nameContainer}>
                    <p className={styles.name}>- {partnershipsdata[0].name}</p>
                    <img src={star} alt="Star" className={styles.star} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.testimonial}>
                <img src={images[partnershipsdata[1].image]} alt={partnershipsdata[1].name} className={styles.image} />
                <div className={styles.verticalLine}></div>
                <div className={styles.textContainer}>
                  <p className={styles.text}>{partnershipsdata[1].text}</p>
                  <div className={styles.nameContainer}>
                    <p className={styles.name}>- {partnershipsdata[1].name}</p>
                    <img src={star} alt="Star" className={styles.star} />
                  </div>
                </div>
              </div>
              <div className={styles.testimonial}>
                <img src={images[partnershipsdata[2].image]} alt={partnershipsdata[2].name} className={styles.image} />
                <div className={styles.verticalLine}></div>
                <div className={styles.textContainer}>
                  <p className={styles.text}>{partnershipsdata[2].text}</p>
                  <div className={styles.nameContainer}>
                    <p className={styles.name}>- {partnershipsdata[2].name}</p>
                    <img src={star} alt="Star" className={styles.star} />
                  </div>
                </div>
              </div>
              <div className={styles.testimonial}>
                <img src={images[partnershipsdata[3].image]} alt={partnershipsdata[3].name} className={styles.image} />
                <div className={styles.verticalLine}></div>
                <div className={styles.textContainer}>
                  <p className={styles.text}>{partnershipsdata[3].text}</p>
                  <div className={styles.nameContainer}>
                    <p className={styles.name}>- {partnershipsdata[3].name}</p>
                    <img src={star} alt="Star" className={styles.star} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;