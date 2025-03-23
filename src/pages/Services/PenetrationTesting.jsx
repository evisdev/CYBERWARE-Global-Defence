import React from "react";
import styles from "./PenetrationTesting.module.scss";
import { servicesdata } from "./servicedata1";

const PenetrationTesting = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.homeHeroContainerNew}>
          <h1 className={styles.mainTitleNew}>
            <span className={styles.siemText}>Penetration</span> Testing
          </h1>
          <q className={styles.titleTextNew}>
            Identify and eliminate vulnerabilities in your network with our <br /> comprehensive penetration testing services.
          </q>
          <div className={styles.btnContainerNew}>
            <a target="_blank" href="#">
              Get Demo
            </a>
          </div>
        </div>
      </div>
      <section className={styles.newSection}>
        <h2>
          <span className={styles.whiteText}>Key Features of</span> <span className={styles.siemText}>Penetration Testing</span>
        </h2>
        <img src={servicesdata[1].img} alt="Key Features of Penetration Testing" />
        <div className={styles.featuresContainer}>
          <div className={styles.featureBox}>
            <h3>Reconnaissance</h3>
            <p>Gathering information about the target system, which may include identifying network services and potential entry points.</p>
          </div>
          <div className={styles.featureBox}>
            <h3>Scanning</h3>
            <p>Using tools to discover live hosts, open ports, and services running on those ports. This phase helps in mapping the attack surface.</p>
          </div>
          <div className={styles.featureBox}>
            <h3>Gaining Access</h3>
            <p>Exploiting identified vulnerabilities using various tools and techniques to gain unauthorized access to the system.</p>
          </div>
          <div className={styles.featureBox}>
            <h3>Maintaining Access</h3>
            <p>Establishing a persistent presence within the target environment to gather further data and assess the extent of control that can be achieved.</p>
          </div>
        </div>
        <div className={styles.overviewContainer}>
          <h2 className={styles.overviewTitle}>Overview of Penetration Testing</h2>
          <p className={styles.overviewText}>
            Penetration testing, often referred to as "pentesting," is an authorized simulated cyberattack on a computer system, designed <br /> to evaluate its security. Unlike vulnerability assessments, which merely identify potential weaknesses, penetration tests <br /> actively exploit vulnerabilities to demonstrate their impact and assess the overall security posture of the system.
          </p>
          <h2 className={styles.overviewTitle}>Purpose and Importance</h2>
          <p className={styles.overviewText}>
            The primary goal of penetration testing is to identify and address security vulnerabilities before they can be exploited by <br /> malicious actors. By simulating real-world attacks, organizations can understand their weaknesses and implement necessary <br /> defenses. Regular penetration testing is crucial for maintaining robust cybersecurity measures, especially in light of increasing <br /> cyber threats.
          </p>
          <h2 className={styles.overviewTitle}>Types of Penetration Testing</h2>
          <p className={styles.overviewText}>
            Different types of penetration tests focus on various aspects of an organization's security: <br /> <br />
            <ol className={styles.customList}>
              <li >Web Application Testing: Evaluates web applications for vulnerabilities such as SQL injection and cross-site scripting (XSS).</li>
              <li >Internal Network Testing: Assesses vulnerabilities from within the network, simulating an insider threat.</li>
              <li >External Network Testing: Identifies vulnerabilities that could be exploited from outside the organization.</li>
              <li >Social Engineering Testing: Tests employees' susceptibility to phishing and other social engineering tactics.</li>
              <li >Wireless Network Testing: Examines the security of wireless networks against unauthorized access.</li>
            </ol>
          </p>
          <h2 className={styles.overviewTitle}>Conclusion</h2>
          <p className={styles.overviewText}>
          Penetration testing is an essential component of a comprehensive cybersecurity strategy. By simulating attacks and <br /> identifying vulnerabilities, organizations can take proactive measures to strengthen their defenses against real-world threats. <br /> Regularly scheduled penetration tests not only enhance security but also ensure compliance with industry regulations, <br /> ultimately protecting sensitive data and maintaining trust with stakeholders.
          </p>
        </div>
      </section>
    </>
  );
}

export default PenetrationTesting;