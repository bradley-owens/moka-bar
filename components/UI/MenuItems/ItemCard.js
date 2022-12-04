import styles from "./ItemCard.module.css";
import { motion } from "framer-motion";

const ItemCard = (props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: {
          y: 5,
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          y: -5,
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.3,
          },
        },
      }}
    >
      <div className={styles.card}>
        <h3>{props.name}</h3>
        <p>{props.description ? props.description : null}</p>
      </div>
    </motion.div>
  );
};

export default ItemCard;
