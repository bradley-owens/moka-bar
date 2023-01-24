import heroImg from "../../public/1.png";
import logo from "../../public/4.png";
import scrollImg from "../../public/scroll.png";
import Image from "next/image";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import { Fragment } from "react";
import React, { useState, useEffect } from "react";

const Hero = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        // delay: 0.2,
        duration: 0.9,
      }}
    >
      <div className={styles.main}>
        <Image
          className={styles["hero-logo"]}
          src={logo}
          alt="hero-logo"
          width="5rem"
        />
        <Image
          className={styles["hero-img"]}
          src={heroImg}
          alt="hero-img"
          width="10rem"
        />

        <div className={styles.info}>
          <h2>Building E5 14-88 McGregor Rd, Smithfield. 4878</h2>
          <h2>0478 055 734</h2>
        </div>

        <div className={styles.menu}>
          <Image
            className={styles.scroll}
            alt="scroll-button"
            src={scrollImg}
            width="rem"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
