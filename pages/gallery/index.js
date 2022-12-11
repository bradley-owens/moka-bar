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
import change from "../../public/galleryImages/change.png";
import Image from "next/image";
import { useState, Fragment } from "react";
import useDeviceSize from "../../components/Hooks/useDeviceSize";
import MobileGallery from "../../components/Gallery/Mobile/MobileGallery";

const Gallery = () => {
  const [width] = useDeviceSize();

  const [galleryState, setGalleryState] = useState(true);
  const switchGalleryHandler = () => {
    console.log("test");
    setGalleryState(!galleryState);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1>Take a look at what we do</h1>
          {/* <h2>Take a look at what we do</h2> */}

          {width < 769 ? (
            <MobileGallery />
          ) : (
            <Fragment>
              <div className={styles["gallery-1"]}>
                <Image
                  className={styles.image1}
                  src={galleryState ? img7 : img1}
                  key={Math.random()}
                  alt="grid-7"
                  width="1rem"
                />

                <Image
                  className={styles["img-horizontal"]}
                  src={galleryState ? img8 : img4}
                  key={Math.random()}
                  alt="grid-8"
                  width="1rem"
                />

                <Image
                  className={styles.image2}
                  src={galleryState ? img9 : img6}
                  key={Math.random()}
                  alt="grid-9"
                  width="1rem"
                />

                <Image
                  className={styles.image3}
                  src={galleryState ? img10 : img3}
                  key={Math.random()}
                  alt="grid-10"
                  width="1rem"
                />

                <Image
                  className={styles["img-vertical"]}
                  src={galleryState ? img11 : img5}
                  key={Math.random()}
                  alt="grid-11"
                  width="1rem"
                />

                <Image
                  className={styles.image4}
                  src={galleryState ? img12 : img2}
                  key={Math.random()}
                  alt="grid-12"
                  width="1rem"
                />
              </div>

              <div>
                <Image
                  onClick={switchGalleryHandler}
                  className={styles["change-button"]}
                  src={change}
                  alt="switch-img"
                  width="1rem"
                />
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
