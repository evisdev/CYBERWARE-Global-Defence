import React from "react";
import styles from "./Advisors.module.scss";
import { advisors } from "./advisorsdata";

const Advisors = () => {
  return (
    <div className={styles.advisors}>
      <h2 className={styles.title}>Security Awareness Advisors</h2>
      <div className={styles.cards}>
        {advisors.map((advisor, index) => (
          <div key={index} className={styles.card}>
            <img src={advisor.image} alt={advisor.name} className={styles.image} />
            <h3>{advisor.name}</h3>
            <p>{advisor.description}</p>
            <div className={styles.rectangle}>
              <button className={styles.button}></button>
            </div>
          </div>
        ))}
       </div>
      <a href="#founders" className={styles.meetTeam}>Meet the Rest of the Team</a>
    </div>
  );
};

export default Advisors;