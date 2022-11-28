import Image from "next/image";
import Catering from "./Catering";
import Dine from "./Dine";
import Merchandise from "./Merchandise";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div className={styles.container}>
      <Dine />
      <Catering />
      <Merchandise />
    </div>
  );
};

export default Services;
