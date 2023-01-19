import Image from "next/image";
import beansImg from "../../../public/3.png";
import mugsImg from "../../../public/mug.png";
import styles from "./Merchandise.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const Merchandise = () => {
  const animationStylesTitle = {
    hidden: {
      y: 30,
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      y: -30,
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
  };

  const animationStylesCards = {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.2,
      },
    },
  };
  return (
    <div className={styles.container}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={animationStylesTitle}
      >
        <h1> Grab a few things on your way out</h1>
      </motion.div>
      <div className={styles["card-container"]}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animationStylesCards}
        >
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
            <Link href="/menu">
              <button>See more</button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animationStylesCards}
        >
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
            <Link href="/menu">
              <button>See more</button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Merchandise;
