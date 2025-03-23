import React from 'react'; 
import styles from "./Leadership.module.scss";
import { leaders } from "./leaderteam";

const Leadership = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h2>Our Leadership Team</h2>
                <p>Meet the leaders behind CGD's mission to protect businesses from evolving cyber threats. With deep expertise in <br /> cybersecurity and IT consulting, our leadership team drives innovation and ensures the highest standards of security <br /> for our clients. Scroll down to see the faces behind our success.</p>
            </div>
            <div className={styles.cards}>
                {leaders.map((leader, index) => (
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
            <p className={styles.meetTeam}>
                <a href="/about-us#founders">Meet the Rest of the Team</a>
            </p>
        </div>
    )
}

export default Leadership;