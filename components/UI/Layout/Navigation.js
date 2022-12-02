import logoImg from "../../../public/4.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navigation.module.css";
import { motion } from "framer-motion";
import useDeviceSize from "../../Hooks/useDeviceSize";

const Navigation = () => {
  const [width] = useDeviceSize();

  console.log(width);
  return (
    <nav className={styles.nav}>
      {/* <Image className={styles.logo} src={logoImg} width="4rem" alt="logo" /> */}
      <h1>Moka Bar</h1>

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
      {width > 800 ? (
        <Link className={styles.menu} href="/">
          Menu
        </Link>
      ) : (
        <div>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,0"
          />
          <span class="material-symbols-outlined">menu</span>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
