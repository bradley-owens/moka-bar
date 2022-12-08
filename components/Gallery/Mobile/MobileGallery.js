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
import { useState } from "react";
import styles from "./MobileGallery.module.css";

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
  const [imageSrcState, setImageSrcState] = useState(5);
  const switchImageHandler = (e) => {
    const direction = e.target.id;
    if (imageSrcState === 11) {
      setImageSrcState(0);
    } else if (direction === "left") {
      setImageSrcState(imageSrcState - 1);
    } else {
      setImageSrcState(imageSrcState + 1);
    }
    console.log(imageSrcState);
  };

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <Image
          key={Math.random()}
          className={styles.image}
          src={carouselImages[imageSrcState].src}
          alt="gallery-img"
          width="2rem"
        />
      </div>
      <div className={styles["switch-container"]}>
        <Image
          id="left"
          onClick={switchImageHandler}
          className={styles.switch}
          src={switchBtnLeft}
          alt="gallery-img"
          width="2rem"
        />
        <Image
          id="right"
          onClick={switchImageHandler}
          className={styles.switch}
          src={switchBtnRight}
          alt="gallery-img"
          width="2rem"
        />
      </div>
    </div>
  );
};

export default MobileGallery;
