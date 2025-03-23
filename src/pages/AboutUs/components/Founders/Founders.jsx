import React from "react";
import styles from "./Founders.module.scss";
import { founders } from "./foundersdata";

const Founders = React.forwardRef((props, ref) => {
  return (
    <div id="founders" ref={ref}>
      <div className={styles.text}>
        <h2 className={styles.header}> Our Founders</h2>
        <p className={styles.paragraph}>Here’s a glimpse into the expertise driving CGD’s security solutions:</p>
      </div>
      <div className={styles.cards}>
        {founders.map((leader, index) => (
          <div key={index} className={styles.card}>
            <img src={leader.image} alt={leader.name} className={styles.image} />
            <h3>{leader.name}</h3>
            <h4>{leader.title}</h4>
            <p>{leader.description}</p>
            <div className={styles.rectangle}>
              <button className={styles.button}></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Founders;