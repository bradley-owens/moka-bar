import Image from "next/image";
import Layout from "../../components/UI/Layout/Layout";
import styles from "./index.module.css";

const Catering = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.main}>
          <header>
            <h1>Our Catering Packages</h1>
            <p>
              Packages are able to provide gluten free and vegan options for $1
              extra per person.
            </p>
          </header>

          <div>
            <div>
              <Image />
              <h2>Assorted Cakes and Slices</h2>
              <p>Sml ~ serves 4-6 ~ $40 </p>
              <p>Med ~ serves 7-10 ~ $65 </p>
              <p>Lrg ~ serves 20 ~ $130 </p>
              <button>Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Catering;
