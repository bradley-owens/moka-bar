import Layout from "../../components/UI/Layout/Layout";
import styles from "./index.module.css";
import img1 from "../../public/galleryImages/gallery1.jpeg";
import img2 from "../../public/galleryImages/gallery2.png";
import img3 from "../../public/galleryImages/gallery3.png";
import img4 from "../../public/galleryImages/gallery4.png";
import img5 from "../../public/galleryImages/gallery5.png";
import img6 from "../../public/galleryImages/gallery6.png";
import img7 from "../../public/galleryImages/gallery7.png";
import img8 from "../../public/galleryImages/gallery8.png";
import img9 from "../../public/galleryImages/gallery9.png";
import img10 from "../../public/galleryImages/gallery10.png";
import img11 from "../../public/galleryImages/gallery11.png";
import img12 from "../../public/galleryImages/gallery12.png";
import Image from "next/image";

const Gallery = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1>Take a look at what we do</h1>
          <div className={styles.gallery}>
            <Image
              className={styles.image}
              src={img1}
              alt="grid-1"
              width="1rem"
            />
            <Image
              className={styles.image}
              src={img2}
              alt="grid-2"
              width="1rem"
            />
            <Image
              className={styles.image}
              src={img3}
              alt="grid-3"
              width="1rem"
            />
            <Image
              className={styles.image}
              src={img4}
              alt="grid-4"
              width="1rem"
            />
            <Image
              className={styles.image}
              src={img5}
              alt="grid-5"
              width="1rem"
            />
            <Image
              className={styles.image}
              src={img6}
              alt="grid-6"
              width="1rem"
            />
            <Image
              className={styles.image}
              src={img7}
              alt="grid-7"
              width="1rem"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
