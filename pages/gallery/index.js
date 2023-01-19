import Layout from "../../components/UI/Layout/Layout";
import styles from "./index.module.css";

import useDeviceSize from "../../components/Hooks/useDeviceSize";
import MobileGallery from "../../components/Gallery/Mobile/MobileGallery";
import Footer from "../../components/Footer/Footer";
import DesktopGallery from "../../components/Gallery/Desktop/DesktopGallery";

const Gallery = () => {
  const [width] = useDeviceSize();

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1>Take a look at what we do</h1>
          {width < 800 ? <MobileGallery /> : <DesktopGallery />}
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
