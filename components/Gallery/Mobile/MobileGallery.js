import Image from "next/image";
import img1 from "../../../public/galleryImages/gallery1.jpeg";
import img2 from "../../../public/galleryImages/gallery2.png";
import img3 from "../../../public/galleryImages/gallery3.png";
import img4 from "../../../public/galleryImages/gallery4.png";
import img5 from "../../../public/galleryImages/gallery5.png";
import img6 from "../../../public/galleryImages/gallery6.png";
import img7 from "../../../public/galleryImages/gallery7.png";
import img8 from "../../../public/galleryImages/gallery8.png";
import img9 from "../../../public/galleryImages/gallery9.png";
import img10 from "../../../public/galleryImages/gallery10.png";
import img11 from "../../../public/galleryImages/gallery11.png";
import img12 from "../../../public/galleryImages/gallery12.png";
import switchBtnRight from "../../../public/galleryImages/change.png";
import switchBtnLeft from "../../../public/galleryImages/left.png";
import { useState, useRef, useEffect } from "react";
import styles from "./MobileGallery.module.css";
import { motion } from "framer-motion";

const carouselImages = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
  { src: img7 },
  { src: img8 },
  { src: img9 },
  { src: img10 },
  { src: img11 },
  { src: img12 },
];

const MobileGallery = () => {
  // const [imageSrcState, setImageSrcState] = useState(5);
  // const switchImageHandler = (e) => {
  //   const direction = e.target.id;
  //   if (imageSrcState === 11) {
  //     setImageSrcState(0);
  //   } else if (imageSrcState === 1) {
  //     setImageSrcState(10);
  //   } else if (direction === "left") {
  //     setImageSrcState(imageSrcState - 1);
  //   } else {
  //     setImageSrcState(imageSrcState + 1);
  //   }
  //   console.log(imageSrcState);
  // };

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className={styles.container}>
      <motion.div
        ref={carousel}
        className={styles.carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <div className={styles.x}>
          <p>x</p>
        </div>
        <div className={styles.y}>
          <p>y</p>
        </div>
        <motion.div
          className={styles["inner-carousel"]}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {carouselImages.map((img) => {
            return (
              <motion.div key={img.src} className={styles.item}>
                <Image
                  key={Math.random()}
                  className={styles.image}
                  src={img.src}
                  alt="gallery-img"
                  width="2rem"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MobileGallery;
