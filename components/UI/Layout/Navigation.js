import logoImg from "../../../public/4.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navigation.module.css";
import { motion } from "framer-motion";
import useDeviceSize from "../../Hooks/useDeviceSize";

const Navigation = () => {
  const [width] = useDeviceSize();

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

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Catering</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      {width > 800 ? (
        <Link className={styles.menu} href="/menu">
          Menu
        </Link>
      ) : (
        <div>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,0"
          />
          <span className="material-symbols-outlined">menu</span>
        </div>
      )}
    </motion.div>
  );
};

export default Navigation;
