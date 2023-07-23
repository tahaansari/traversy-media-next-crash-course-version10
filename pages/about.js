import React from "react";
import aboutStyle from "../styles/About.module.css";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <div className={aboutStyle.bgcolor}>
        <h1>About</h1>
      </div>
    </>
  );
};

export default about;
