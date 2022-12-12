import Image from "next/image";
import Layout from "../../components/UI/Layout/Layout";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import cakesImg from "../../public/galleryImages/catering.png";
import fruitImg from "../../public/galleryImages/gallery2.png";
import grazingImg from "../../public/galleryImages/gallery8.png";
import Link from "next/link";
import cakes from "../../public/galleryImages/cakes.jpg";
import banana from "../../public/galleryImages/banana.jpg";
import fruit from "../../public/galleryImages/fruit.jpg";
import grazing from "../../public/galleryImages/grazing.jpg";
import sandwhich from "../../public/galleryImages/sandwhich.jpg";
import Footer from "../../components/Footer/Footer";

const Catering = () => {
  const packages = [
    {
      src: cakes,
      name: "Assorted Cakes and Slices",
      sizes: {
        small: { size: "sml", serves: "Serves 4-6", price: "$40" },
        medium: { size: "med", serves: "Serves 7-10", price: "$65" },
        large: { size: "large", serves: "Serves 7-10", price: "$65 " },
      },
    },
    {
      src: fruit,
      name: "Fruit Platters",
      sizes: {
        small: { size: "sml", serves: "Serves 4-6", price: "$35" },
        medium: { size: "med", serves: "Serves 7-10", price: "$55" },
        large: { size: "large", serves: "Serves 7-10", price: "$95 " },
      },
    },
    {
      src: grazing,
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
      src: banana,
      name: "Whole Banana Bread",
      description: "Freshly Made Banana Bread Loaf",
      price: "$25",
    },
    {
      src: sandwhich,
      name: "Packed Lunch",
      description: "Sandwich Or Baguette, Cake, Fruit and Popper",
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
                      {`${item.sizes.medium.size} ~ ${item.sizes.medium.serves} ~ ${item.sizes.medium.price}`}
                    </p>
                    <p>
                      {`${item.sizes.small.size} ~ ${item.sizes.small.serves} ~ ${item.sizes.small.price}`}
                    </p>
                    <Link href="/contact">
                      <button>Order Now</button>
                    </Link>
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
                    <Image
                      className={styles["package-img"]}
                      src={item.src}
                      alt="catering-img"
                      width="2rem"
                    />

                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <Link href="/contact">
                      <button>Order Now</button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Catering;
