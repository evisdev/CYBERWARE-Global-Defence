import React from "react";
import styles from "./NetworkSecurity.module.scss";
import { servicesdata } from "./servicedata1";

const NetworkSecurity = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.homeHeroContainerNew}>
          <h1 className={styles.mainTitleNew}>
            <span className={styles.siemText}>Network</span> Security
          </h1>
          <q className={styles.titleTextNew}>
          We offer end-to-end network security solutions, optimizing your <br /> infrastructure while securing it against unauthorized access.
          </q>
          <div className={styles.btnContainerNew}>
            <a target="_blank" href="#">
              Get a Demo
            </a>
          </div>
        </div>
      </div>
      <section className={styles.newSection}>
        <h2>
          <span className={styles.whiteText}>Key Features of</span> <span className={styles.siemText}>Network Security</span>
        </h2>
        <img src={servicesdata[3].img } alt="Key Features of SIEM" />
        <div className={styles.featuresContainer}>
          <div className={styles.featureBox}>
            <h3>Perform Regular Audits</h3>
            <p>Conduct thorough network audits to identify vulnerabilities and assess the overall security posture.  </p>
          </div>
          <div className={styles.featureBox}>
            <h3>Implement Data Loss Prevention (DLP)</h3>
            <p>DLP strategies help monitor and control data transfers across the network to prevent unauthorized access or data breaches </p>
          </div>
          <div className={styles.featureBox}>
            <h3>Educate Employees</h3>
            <p>Regular training on security awareness helps employees recognize phishing attempts and social engineering tactics, reducing the risk of human error </p>
          </div>
          <div className={styles.featureBox}>
            <h3>Secure Routers</h3>
            <p>Change default passwords on routers, relocate them to secure areas, and implement additional security measures such as video surveillance to prevent unauthorized access  </p>
          </div>
        </div>
        <div className={styles.overviewContainer}>
          <h2 className={styles.overviewTitle}>Network Security: Best Practices and Strategies</h2>
          <p className={styles.overviewText}>
          Network security encompasses a range of measures designed to protect the integrity, confidentiality, and availability of <br /> computer networks and data. As cyber threats evolve, organizations must adopt robust strategies to safeguard their networks <br /> against unauthorized access, misuse, or damage.          </p>
          <h2 className={styles.overviewTitle}>Key Components of Network Security</h2>
          <p className={styles.overviewText}>
          Physical Security: Protects physical assets such as servers, routers, and switches from unauthorized access. This includes <br /> using locks, surveillance cameras, and controlled access to facilities. <br />
Technical Security: Involves the use of hardware and software technologies to protect data in transit and at rest. This includes <br /> firewalls, intrusion detection systems (IDS), and encryption protocols. <br />
Administrative Security: Focuses on policies and procedures that govern user behavior and access controls. This includes user <br /> authentication processes and compliance with security policies.
</p>
          <h2 className={styles.overviewTitle}>Best Practices for Network Security</h2>
          <p className={styles.overviewText}>
          Secure Routers: Change default passwords on routers, relocate them to secure areas, and implement additional security <br /> measures such as video surveillance to prevent unauthorized access. <br />
Use SIEM Solutions: Aggregate network data in a Security Information and Event Management (SIEM) system to analyze real- <br /> time alerts and historical data for potential threats. <br />
Establish Access Controls: Implement strict access management policies to regulate who can access sensitive information <br /> based on their roles within the organization. <br />
Network Segmentation: Divide the network into segments based on trust levels to contain potential breaches and limit the <br /> spread of threats across the network.          </p>
          <h2 className={styles.overviewTitle}>Conclusion</h2>
          <p className={styles.overviewText}>
          Implementing these best practices is essential for maintaining a secure network environment. Organizations must remain <br /> vigilant against emerging threats by continuously updating their security measures, educating employees, and leveraging <br /> advanced technologies like SIEM systems. By fostering a culture of security awareness and proactive defense, organizations <br /> can significantly reduce their risk exposure in an increasingly complex cyber landscape.
          </p>
        </div>
      </section>
    </>
  );
}

export default NetworkSecurity;