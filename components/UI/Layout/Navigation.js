import logoImg from "../../../public/4.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navigation.module.css";
import { motion } from "framer-motion";
import useDeviceSize from "../../Hooks/useDeviceSize";
import { useState } from "react";

const Navigation = () => {
  const [width] = useDeviceSize();

  const [navState, setNavState] = useState(false);

  const toggleMobileNav = () => {
    setNavState(!navState);
  };

  return (
    <motion.div
      className={styles.nav}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.2,
      }}
    >
      {/* <Image className={styles.logo} src={logoImg} width="4rem" alt="logo" /> */}
      <h1>MOKA BAR</h1>
      <ul className={navState ? styles.open : styles["nav-links"]}>
        <li>
          <Link className={styles.link} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/catering">
            Catering
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/gallery">
            Gallery
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/contact">
            Contact
          </Link>
        </li>
        <Link className={styles.menu} href="/menu">
          Menu
        </Link>
      </ul>

      <div className={styles.hamburger} onClick={toggleMobileNav}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </motion.div>
  );
};

export default Navigation;
