import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.headerContainerNew}>
      <p>
        <span className={styles.highlightNew}>Protecting</span> the digital future through innovative cybersecurity <span className={styles.highlightNew}>solutions</span>
      </p>
    </div>
  );
};

export default Header;