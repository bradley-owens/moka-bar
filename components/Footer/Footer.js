import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <p>Moka Bar</p>
        <p>Food and Beverage</p>
        <p> 52 Picton Crescent</p>
        <p>0428835477</p>
      </div>

      <ul>
        <li>
          <Link className={styles.link} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/menu">
            Menu
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/catering">
            Catering
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/contact">
            Contact
          </Link>
        </li>
      </ul>

      <div>
        <p>We support </p>
        <p> Green Caffeine!</p>
        <p>Come in for a coffee today!</p>
      </div>
    </div>
  );
};

export default Footer;
