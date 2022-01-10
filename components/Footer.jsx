import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            oh yes, we did. the lama pizza, well baked slice of pizza.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Fing our restaurants</h1>
          <p className={styles.text}>
            5555 N Exist Address #55
            <br /> New York, 11201
            <br /> (555) 555-5555
          </p>
          <p className={styles.text}>
            2222 N Exist Address #22
            <br /> New York, 11201
            <br /> (222) 222-2222
          </p>
          <p className={styles.text}>
            1111 N Exist Address #11
            <br /> New York, 11201
            <br /> (111) 111-1111
          </p>
          <p className={styles.text}>
            9999 N Exist Address #99
            <br /> New York, 11201
            <br /> (999) 999-9999
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Working hours</h1>
          <p className={styles.text}>
            Monday - Saturday
            <br /> 08:00 - 22:00
          </p>
          <p className={styles.text}>
            Sunday
            <br /> 09:00 - 20:00
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
