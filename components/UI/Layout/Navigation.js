import logoImg from "../../../public/4.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navigation.module.css";
import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Image className={styles.logo} src={logoImg} width="4rem" alt="logo" />

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Catering</Link>
        </li>
        <li>
          <Link href="/">Gallery</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
      </ul>
      {/* <motion.a
        whileHover={{ scale: 1.1 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
      > */}
      <Link className={styles.menu} href="/">
        Menu
      </Link>
      {/* </motion.a> */}
    </nav>
  );
};

export default Navigation;
