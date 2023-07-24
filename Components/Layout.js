import React from "react";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.navigation}>
      <header>Header</header>
      {children}
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
