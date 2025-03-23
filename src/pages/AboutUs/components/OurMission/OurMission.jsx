import React from "react";
import styles from "./OurMission.module.scss";
import aboutusdata from "../../aboutusdata";

const OurMission = () => {
  return (
    <div className={styles.servicesContainerNew}>
      {aboutusdata.map((item, index) => (
        <div key={index} className={styles.serviceItemNew}>
          <img src={item.svg} alt={item.title} />
          <h3>
            <span className={styles.highlightOur}>Our</span> {item.title.replace("Our", "")}
          </h3>
          <p dangerouslySetInnerHTML={{ __html: item.text }} />
        </div>
      ))}
    </div>
  );
};

export default OurMission;