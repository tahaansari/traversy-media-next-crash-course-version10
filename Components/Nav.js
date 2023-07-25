import React from "react";
import navStyle from "../styles/Nav.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <div className={navStyle.nav}>
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
