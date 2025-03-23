import React from "react";
import styles from "./Specialists.module.scss";
import { specialists } from "./specialistsdata";

const Specialists = () => {
  return (
    <div className={styles.specialists}>
      <h2>Cybersecurity Specialists</h2>
      <div className={styles.cards}>
        {specialists.map((leader, index) => (
          <div key={index} className={styles.card}>
            <img src={leader.image} alt={leader.name} className={styles.image} />
            <h3>{leader.name}</h3>
            <p>{leader.description}</p>
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

export default Specialists;