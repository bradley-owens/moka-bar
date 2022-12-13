import Layout from "../../components/UI/Layout/Layout";
import styles from "./index.module.css";

import useDeviceSize from "../../components/Hooks/useDeviceSize";
import MobileGallery from "../../components/Gallery/Mobile/MobileGallery";
import Footer from "../../components/Footer/Footer";

const Gallery = () => {
  const [width] = useDeviceSize();

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1>Take a look at what we do</h1>
          {/* <h2>Take a look at what we do</h2> */}

          {width < 800 ? (
            <MobileGallery />
          ) : (
            <Fragment>
              <div className={styles["flex-container"]}>
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
              </div>
            </Fragment>
          )}

          <div className={styles.x}>
            <p> background-circle</p>
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  );
};

export default Gallery;
