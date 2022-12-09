import Image from "next/image";
import styles from "./index.module.css";

const Catering = () => {
  return (
    <div className={styles.container}>
      <header>
        <h1>Our Catering Packages</h1>
        <p>
          Packages are able to provide gluten free and vegan options for $1
          extra per person.
        </p>
      </header>

      <div className={styles.main}>
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
  );
};

export default Catering;
