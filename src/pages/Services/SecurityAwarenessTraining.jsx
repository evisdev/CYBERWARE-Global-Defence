import React from "react";
import styles from "./SecurityAwarenessTraining.module.scss";
import { servicesdata } from "./servicedata1";

const SecurityAwareenessTraining = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.homeHeroContainerNew}>
          <h1 className={styles.mainTitleNew}>
            <span className={styles.siemText}>Security</span> Awareness Training
          </h1>
          <q className={styles.titleTextNew}>
          Empower your employees to recognize and respond to potential cyber <br /> threats. Our comprehensive security awareness programs equip your <br /> workforce with the knowledge they need to prevent attacks.          </q>
          <div className={styles.btnContainerNew}>
            <a target="_blank" href="#">
              Get a Demo
            </a>
          </div>
        </div>
      </div>
      <section className={styles.newSection}>
        <h2>
          <span className={styles.whiteText}>Key Features of</span> <span className={styles.siemText}>Security Awareeness Training</span>
        </h2>
        <img src={servicesdata[3].img } alt="Key Features of SIEM" />
        <div className={styles.featuresContainer}>
          <div className={styles.featureBox}>
            <h3>Customized Content</h3>
            <p>Tailor training materials to different roles within the organization to ensure relevance and engagement  </p>
          </div>
          <div className={styles.featureBox}>
            <h3>Regular Training Sessions</h3>
            <p>Conduct training sessions every four to six months, as retention of knowledge tends to decline after this period</p>
          </div>
          <div className={styles.featureBox}>
            <h3>Diverse Learning Methods</h3>
            <p>Utilize various formats such as videos, quizzes, and simulations to cater to different learning styles and keep content engaging</p>
          </div>
          <div className={styles.featureBox}>
            <h3>Phishing Simulations</h3>
            <p>Regularly test employees with simulated phishing attacks to reinforce learning and gauge awareness levels</p>
          </div>
        </div>
        <div className={styles.overviewContainer}>
          <h2 className={styles.overviewTitle}>Security Awareness Training: Importance and Best Practices</h2>
          <p className={styles.overviewText}>
          Security awareness training is a strategic initiative aimed at educating employees about cybersecurity risks and best practices. <br /> By enhancing awareness, organizations can significantly reduce the likelihood of security breaches caused by human error. </p>
          <h2 className={styles.overviewTitle}>Objectives of Security Awareness Training</h2>
          <p className={styles.overviewText}>
          Educate Employees: Teach staff about the importance of cybersecurity and their role in protecting organizational assets. <br />
Reduce Human Error: Equip employees with the knowledge to recognize and respond to potential threats, thus minimizing <br /> incidents caused by negligence. <br />
Cultivate a Cybersecurity Mindset: Foster a culture of security where employees feel responsible for safeguarding sensitive <br /> information.
</p>
          <h2 className={styles.overviewTitle}>Best Practices for Implementation</h2>
          <p className={styles.overviewText}>
          Onboarding Training: Integrate security awareness training into the onboarding process for new employees to establish a <br /> security-first culture from the start. <br />
Continuous Learning: Provide ongoing education through newsletters, updates on emerging threats, and refresher courses <br /> throughout the year. <br />
Positive Reinforcement: Use humor and engaging content rather than fear-based tactics to improve retention and participation <br /> in training programs. <br />
Measure Effectiveness: Implement metrics to assess the impact of training, such as tracking phishing susceptibility rates <br /> before and after training sessions</p>
          <h2 className={styles.overviewTitle}>Conclusion</h2>
          <p className={styles.overviewText}>
          Security awareness training is essential for building a resilient organizational culture against cyber threats. By educating <br /> employees on best practices and fostering a proactive approach to cybersecurity, organizations can significantly mitigate risks <br /> associated with human error. Regularly updated training programs that engage employees will help maintain high levels of <br /> awareness and readiness against evolving cyber threats.          </p>
        </div>
      </section>
    </>
  );
}

export default SecurityAwareenessTraining;