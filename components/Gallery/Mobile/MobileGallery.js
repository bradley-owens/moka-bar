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
import switchBtn from "../../../public/galleryImages/change.png";
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
  const [imageSrcState, setImageSrcState] = useState(0);
  const switchImageHandler = () => {
    if (imageSrcState === 11) {
      setImageSrcState(0);
    } else {
      setImageSrcState(imageSrcState + 1);
      console.log("incremented");
    }
  };

  return (
    <div>
      <div>
        <Image
          className={styles.image}
          src={carouselImages[imageSrcState].src}
          alt="gallery-img"
          width="2rem"
        />
      </div>
      <Image
        onClick={switchImageHandler}
        className={styles.switch}
        src={switchBtn}
        alt="gallery-img"
        width="2rem"
      />
    </div>
  );
};

export default MobileGallery;
