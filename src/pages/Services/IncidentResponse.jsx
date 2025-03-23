import React from "react";
import styles from "./IncidentResponse.module.scss";
import { servicesdata } from "./servicedata1";

const IncidentResponse = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.homeHeroContainerNew}>
          <h1 className={styles.mainTitleNew}>
            <span className={styles.siemText}>Incident</span> Response
          </h1>
          <q className={styles.titleTextNew}>
          In the event of a breach, our expert team reacts swiftly to minimize <br /> damage and restore your systems quickly.
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
          <span className={styles.whiteText}>Key Features of</span> <span className={styles.siemText}>Incident Response</span>
        </h2>
        <img src={servicesdata[2].img } alt="Key Features of SIEM" />
        <div className={styles.featuresContainer}>
          <div className={styles.featureBox}>
            <h3>Reduce Response Time</h3>
            <p>A clear plan enables quicker identification and remediation of threats, minimizing potential damage </p>
          </div>
          <div className={styles.featureBox}>
            <h3>Enhance Coordination</h3>
            <p>Clearly defined roles and responsibilities facilitate teamwork during high-stress situations </p>
          </div>
          <div className={styles.featureBox}>
            <h3>Ensure Compliance</h3>
            <p>Many regulations require documented incident response procedures, helping organizations avoid legal repercussions </p>
          </div>
          <div className={styles.featureBox}>
            <h3>Improve Security Posture</h3>
            <p>Post-incident analysis allows organizations to learn from incidents and strengthen defenses against future threats  </p>
          </div>
        </div>
        <div className={styles.overviewContainer}>
          <h2 className={styles.overviewTitle}>Incident Response: Overview and Best Practices</h2>
          <p className={styles.overviewTextFirst}>
          Incident response refers to the structured approach organizations use to prepare for, detect, manage, and recover from <br /> cybersecurity incidents. A well-defined incident response plan (IRP) is crucial for minimizing damage and ensuring a swift <br /> recovery.
          </p>
          <h2 className={styles.overviewTitle}>Best Practices for Effective Incident Response</h2>
          <p className={styles.overviewText}>
          Develop a Comprehensive IRP: Ensure your IRP includes detailed procedures for various types of incidents, communication <br /> plans, and escalation paths for different threat levels <br />
Implement Continuous Monitoring: Utilize tools like SIEM (Security Information and Event Management) to monitor for <br /> suspicious activities 24/7 <br />
Conduct Regular Training: Regularly educate employees about potential threats and proper reporting procedures to foster a <br /> culture of security awareness within the organization 
</p>
          <h2 className={styles.overviewTitle}>Phases of Incident Response</h2>
          <p className={styles.overviewText}>
          The incident response process typically involves several key phases: <br />
Preparation: Organizations should conduct risk assessments, define security policies, and establish an incident response team <br /> with clearly defined roles. This phase may also include employee training to promote security awareness <br />
Detection and Analysis: Continuous monitoring of systems helps in the early detection of anomalies. Once detected, incidents <br /> must be prioritized based on their potential impact. Analyzing the nature and scope of the threat is crucial for an effective <br /> response strategy <br />
Containment: Immediate actions are taken to limit the spread of the incident. This may involve isolating affected systems or <br /> disabling compromised accounts          </p>
          <h2 className={styles.overviewTitle}>Conclusion</h2>
          <p className={styles.overviewText}>
          A robust incident response strategy is essential for any organization aiming to protect its assets from cyber threats. By <br /> preparing adequately, responding effectively, and learning from past incidents, organizations can significantly enhance their <br /> resilience against future attacks. Implementing best practices in incident response not only mitigates risks but also fosters a <br /> proactive security culture within the organization.          </p>
        </div>
      </section>
    </>
  );
}

export default IncidentResponse;