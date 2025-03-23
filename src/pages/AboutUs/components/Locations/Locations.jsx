import React from "react";
import styles from "./Locations.module.scss";
import locationsData from "./locationsdata";

const Locations = () => {
  return (
    <div className={styles.text}>
      <h1 className={styles.header}>
        <span className={styles.headerWhite}>Our</span> <span className={styles.headerOrange}>Locations</span>
      </h1>
      <div className={styles.locationsContainer}>
        {locationsData.map((location, index) => (
          <div key={index} className={styles.location}>
            <h2 className={styles.locationTitle}>{location.title}</h2>
            <img src={location.svg} alt={`${location.title} icon`} className={styles.locationIcon} />
            <div className={styles.locationDetails}>
              <p className={styles.locationAddress}>{location.address}</p>
              <p className={styles.locationCity}>{location.city}</p>
              <p className={styles.locationZipCode}>{location.zipCode}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;