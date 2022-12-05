import Image from "next/image";
import Catering from "./Catering/Catering";
import Dine from "./Dine/Dine";
import Merchandise from "./Merchandise/Merchandise";
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
