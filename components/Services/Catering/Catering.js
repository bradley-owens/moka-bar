import Image from "next/image";
import img1 from "../../../public/catering1.png";
import img2 from "../../../public/catering2.png";
import styles from "./Catering.module.css";
import { motion } from "framer-motion";
import { CateringAnimationStyles } from "../../Hooks/AnimationsStyles/CateringAnimationStyles";

const Catering = () => {
  const variantStyles = CateringAnimationStyles();

  return (
    <div className={styles.service}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variantStyles}
      >
        <h1>Book our Catering</h1>
      </motion.div>
      <div className={styles.x}>
        <p> background-circle</p>
      </div>
      <div className={styles.y}>
        <p> background-circle</p>
      </div>
      <div className={styles.main}>
        <Image
          className={styles.img1}
          src={img2}
          alt="service-img1"
          width="1rem"
        />
        <Image
          className={styles.img2}
          src={img1}
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
              Have a look at our catering packages and order a feast for all
              your job, friends or family!
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variantStyles}
        >
          <button>See more!</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Catering;
