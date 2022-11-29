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
      <div>
        <p>Home</p>
        <p>Menu</p>
        <p>Catering</p>
        <p>Merchandise</p>
      </div>
      <div>
        <p>We support </p>
        <p> Green Caffeine!</p>
        <p>Come in for a coffee today!</p>
      </div>
    </div>
  );
};

export default Footer;
