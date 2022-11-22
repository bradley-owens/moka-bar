import Image from "next/image";
import Catering from "./Catering";
import Dine from "./Dine";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div className={styles.container}>
      <Dine />
      <Catering />
    </div>
  );
};

export default Services;
