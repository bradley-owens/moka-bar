import Image from "next/image";
import beansImg from "../../public/3.png";
import mugsImg from "../../public/mug.png";
import styles from "./Merchandise.module.css";

const Merchandise = () => {
  return (
    <div className={styles.container}>
      <h1> Grab a few things on your way out</h1>
      <div className={styles["card-container"]}>
        <div className={styles.card}>
          <Image
            className={styles.mugs}
            src={mugsImg}
            alt="mug-img"
            width="2rem"
          />
          <h2>Green Caffeine Mugs</h2>
          <p>
            Thats right we're with Green Caffeine! Stop in and grab a coffee
            with a GC resuseable mug.
          </p>
          <button>See more</button>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.beans}
            src={beansImg}
            alt="beans-img"
            width="2rem"
          />
          <h2>Coffee Beans</h2>
          <p>
            Love our coffee? Why stop there? We offer bags of our delicious
            beans right here at Moka Bar.
          </p>
          <button>See more</button>
        </div>
      </div>
    </div>
  );
};

export default Merchandise;
