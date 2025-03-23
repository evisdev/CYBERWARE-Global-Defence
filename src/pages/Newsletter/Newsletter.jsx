import React from "react";
import style from "./Newslettter.module.scss";
import { relatedNews } from "./newsetterdata";
import emailIcon from "../../assets/images/footer/email-icon.svg";

const Newsletter = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.title}>Phishing Attacks and Prevention Strategies.</div>
          <div className={style.title1}>The Evolving Landscape of Phishing <br /> Attacks: What You Need to Know</div>
        </div>
        <div className={style.infoRow}>
          <p className={style.info1}>Posted: October 20, 2024</p>
          <p className={style.info}>By: Cybersecurity Insights Team</p>
        </div>
      </div>
      <div className={style.newSection}>
        <div className={style.text6}>Related News</div>
        <div className={style.sectionsContainer}>
          <div className={style.leftSection}>
            {relatedNews.slice(0, 3).map((news, index) => (
              <div key={index} className={style.card}>
                <img src={news.image} alt="Bookmark" className={style.bookmark} />
                <h5 className={style.cardSmallTitle}>{news.smallTitle}</h5>
                <h6 className={style.cardDate}>Posted: {news.date}</h6>
                <h3 className={style.cardTitle}>{news.title}</h3>
                <h4 className={style.cardText}>{news.description}</h4>
                <button className={style.cardButton}>Read More</button>
              </div>
            ))}
            <div className={style.contributor}>
            <h3>Want to become a <br /> Contributor</h3>
            </div>
            <br /> <br />
            <div className={style.card}>
  <form>
    <label htmlFor="email"></label>
    <input type="email" id="email" name="email" placeholder="Your email" className={style.inputField} />
    <label htmlFor="message"></label>
    <textarea id="message" name="message" placeholder="Tell us Something About Yourself " className={style.textArea}></textarea>
    <button type="submit" className={style.cardButton}>Send</button>
  </form>
</div>
          </div>
          <div className={style.rightSection}>
            <div className={style.titleright}>Summary</div>
            <p>Phishing attacks have become increasingly sophisticated, leveraging social engineering tactics and advanced technology to deceive individuals and organizations. This report examines the latest trends in phishing, highlights notable case studies, and provides actionable prevention strategies to safeguard your digital assets.</p>
            <h1 className={style.introductionTitle}>Introduction</h1>
            <p>Phishing attacks have become increasingly sophisticated, leveraging social engineering tactics and advanced technology to deceive individuals and organizations. This report examines the latest trends in phishing, highlights notable case studies, and provides actionable prevention strategies to safeguard your digital assets.</p>
            <h2 className={style.keytrends}>Key Trends in Phishing Attacks</h2>
            <h5 className={style.smalltitle1}>1. Spear Phishing Campaigns</h5>
            <p>Unlike traditional phishing, spear phishing targets specific individuals or organizations. Attackers often gather information from social media or company websites to craft personalized messages that appear legitimate.</p>
            <h5 className={style.smalltitle1}>2. Use of AI and Automation</h5>
            <p>Cybercriminals are increasingly utilizing AI tools to automate phishing campaigns, making them more efficient and harder to detect. These tools can generate convincing emails that mimic trusted sources.</p>
            <h5 className={style.smalltitle1}>3. Multi-Vector Attacks</h5>
            <p>Phishing attacks are no longer limited to email. Attackers are now using SMS (smishing), social media platforms, and even voice calls (vishing) to reach potential victims through multiple channels.</p>
            <h2 className={style.keytrends}>Notable Case Studies</h2>
            <h5 className={style.smalltitle1}><span className={style.study1}>Case Study 1:</span> Targeting Financial Institutions</h5>
            <p>In early 2024, a major bank fell victim to a sophisticated spear phishing attack that compromised customer data. Attackers impersonated bank representatives and sent emails requesting sensitive information, leading to significant financial losses.</p>
            <h5 className={style.smalltitle1}><span className={style.study2}> Case Study 2: </span>Ransomware via Phishing Links</h5>
            <p>A healthcare organization experienced a ransomware attack after employees clicked on a malicious link in an email disguised as a routine update. The attack encrypted critical patient data, causing operational disruptions and reputational damage.</p>
            <h2 className={style.keytrends}>Prevention Strategies</h2>
            <h4 className={style.attacks}>To combat the rising threat of phishing attacks, organizations should implement the following strategies:</h4>
            <h5 className={style.smalltitle2}>1. Employee Training Programs</h5>
            <p>Regular training sessions on recognizing phishing attempts can empower employees to identify suspicious emails and links. Incorporating simulated phishing exercises can reinforce learning.</p>
            <h5 className={style.smalltitle2}>2. Multi-Factor Authentication (MFA)</h5>
            <p>Implementing MFA adds an extra layer of security, making it more difficult for attackers to gain unauthorized access even if credentials are compromised.</p>
            <h5 className={style.smalltitle2}>3. Email Filtering Solutions</h5>
            <p>Investing in advanced email filtering solutions can help detect and block phishing emails before they reach employees’ inboxes.</p>
            <h2 className={style.keytrends}>Conclusion</h2>
            <div className={style.text3}>As phishing attacks evolve in complexity and frequency, organizations must remain vigilant and proactive in their defense strategies. By understanding the latest trends and implementing robust prevention measures, businesses can significantly reduce their risk of falling victim to these deceptive tactics.</div>
            </div>
        </div>
      </div>
      <div className={style.newSection1}>
  <div className={style.scrollmenu}>
    {relatedNews.slice(0, 6).map((news, index) => (
      <div key={index} className={style.card1}>
        <img src={news.image} alt="Bookmark" className={style.bookmark} />
        <h5 className={style.cardSmallTitle1}>{news.smallTitle}</h5>
        <h6 className={style.cardDate1}>Posted: {news.date}</h6>
        <h3 className={style.cardTitle1}>{news.title}</h3>
        <h4 className={style.cardText1}>{news.description}</h4>
        <button className={style.cardButton1}>Read More</button>
      </div>
    ))}
  </div>
</div>
<div className={style.section2}>
        <div className={style.text2}>
        <span>Still haven't subscribed to our Newsletter.</span> Sign Up today and stay informed about online security and all the ways you can protect yourself or your business. 
        </div>
        <div className={style.emailForm}>
          <div className={style.emailInputContainer}>
            <img src={emailIcon} alt="Email Icon" className={style.emailIcon} />
            <input type="email" placeholder="Your Email Address" className={style.emailInput} />
          </div>
          <button className={style.joinButton}>Join For Free</button>
        </div>
      </div>
    </div>
      
  );
}

export default Newsletter;