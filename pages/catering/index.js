import Image from "next/image";
import Layout from "../../components/UI/Layout/Layout";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import cakesImg from "../../public/galleryImages/catering.png";
import fruitImg from "../../public/galleryImages/gallery2.png";
import grazingImg from "../../public/galleryImages/gallery8.png";

const Catering = () => {
  const packages = [
    {
      src: cakesImg,
      name: "Assorted Cakes and Slices",
      sizes: {
        small: { size: "sml", serves: "Serves 4-6", price: "$40" },
        medium: { size: "med", serves: "Serves 7-10", price: "$65" },
        large: { size: "large", serves: "Serves 7-10", price: "$65 " },
      },
    },
    {
      src: fruitImg,
      name: "Fruit Platters",
      sizes: {
        small: { size: "sml", serves: "Serves 4-6", price: "$35" },
        medium: { size: "med", serves: "Serves 7-10", price: "$55" },
        large: { size: "large", serves: "Serves 7-10", price: "$95 " },
      },
    },
    {
      src: grazingImg,
      name: "Grazing Platters",
      sizes: {
        small: { size: "sml", serves: "Serves 4-6", price: "$55" },
        medium: { size: "med", serves: "Serves 7-10", price: "$90" },
        large: { size: "large", serves: "Serves 7-10", price: "$160 " },
      },
    },
  ];

  const indivual = [
    {
      name: "Whole Banana Bread",
      description: "Freshly Made Banana Bread Loaf",
      price: "$25",
    },
    {
      name: "Packed Lunch",
      description: "Consists Of Sandwich Or Baguette, Cake, Fruit and Popper",
      price: "$17.50",
    },
  ];
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.main}>
          <header>
            <h1>Our Catering Packages</h1>
            <h3>
              Packages are able to provide gluten free and vegan options for $1
              extra per person.
            </h3>
          </header>

          <h2>Packages</h2>
          <div className={styles["package-grid"]}>
            {packages.map((item) => {
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
                  <div className={styles.package}>
                    <Image
                      className={styles["package-img"]}
                      src={item.src}
                      alt="catering-img"
                      width="2rem"
                    />
                    <h4>{item.name}</h4>
                    <p>
                      {`${item.sizes.small.size} ~ ${item.sizes.small.serves} ~ ${item.sizes.small.price}`}
                    </p>
                    <p>
                      {`${item.sizes.medium.size}~${item.sizes.medium.serves}~${item.sizes.medium.price}`}
                    </p>
                    <p>
                      {`${item.sizes.small.size} ~ ${item.sizes.small.serves} ~ ${item.sizes.small.price}`}
                    </p>
                    <button>Order Now</button>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <h2>Individual</h2>
          <div className={styles["individual-grid"]}>
            {indivual.map((item) => {
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
                  <div className={styles.package}>
                    <Image />
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <button>Order Now</button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Catering;
