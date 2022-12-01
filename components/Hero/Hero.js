import heroImg from "../../public/1.png";
import logo from "../../public/4.png";
import scrollImg from "../../public/scroll.png";
import Image from "next/image";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import { Fragment } from "react";

const Hero = () => {
  return (
    <Fragment>
      <div className={styles.main}>
        <Image
          className={styles["hero-img"]}
          src={heroImg}
          alt="hero-img"
          width="10rem"
        />

        <Image
          className={styles["hero-logo"]}
          src={logo}
          alt="hero-logo"
          width="5rem"
        />

        <div className={styles.info}>
          <h2>52 Picton Crescent, Narangba</h2>
          <h2>0428-835-477</h2>
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
    </Fragment>
  );
};

export default Hero;
