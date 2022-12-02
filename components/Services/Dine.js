import Image from "next/image";
import img1 from "../../public/service1.png";
import img2 from "../../public/service2.png";
import styles from "./Dine.module.css";
import { motion } from "framer-motion";
import { DiningAnimationStyles } from "../Hooks/AnimationsStyles/DiningAnimationStyles";

const Dine = () => {
  const variantStyles = DiningAnimationStyles();

  return (
    <div className={styles.service}>
      <div className={styles.x}>
        <p> background-circle</p>
      </div>

      <div className={styles.y}>
        <p> background-circle</p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variantStyles}
      >
        <h1>Come Dine With Us</h1>
      </motion.div>

      <div className={styles.main}>
        <Image
          className={styles.img1}
          src={img1}
          alt="service-img1"
          width="1rem"
        />
        <Image
          className={styles.img2}
          src={img2}
          alt="service-img2"
          width="1rem"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variantStyles}
        >
          <div className={styles.info}>
            <p>
              Grab a table with a few friends for a coffee or enjoy our freshly
              made delicacies
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variantStyles}
        >
          <button>See Menu!</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Dine;
