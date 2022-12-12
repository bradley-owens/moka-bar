import Map from "../../components/Contact/Map";
import Footer from "../../components/Footer/Footer";
import Layout from "../../components/UI/Layout/Layout";
import styles from "./index.module.css";

const Contact = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.info}>
            <h1>Come find us</h1>
            <h2>Dine-in · Takeaway · No delivery</h2>
            <h3>Building E5 14-88 McGregor Rd, Smithfield. 4878</h3>
            <h3>0478 055 734</h3>
            <h3>moka_bar_jcu</h3>
          </div>
          <Map />

          <div className={styles.x}>
            <p> background-circle</p>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Contact;
