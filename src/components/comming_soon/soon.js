import React, { useEffect, useState } from "react";
import styles from "./soon.module.css";
import soon from "../../static/soon.png";
import Logo from "../logo/logo";

const Soon = () => {
  return (
    <div className={styles.div}>
      {/* <span className={styles.logo}> */}
        <Logo logo={styles.logo}/>
      {/* </span> */}
      <span>Coming Soon .... </span>
    </div>
  );
};

export default Soon;
