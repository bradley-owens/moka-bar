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
import change from "../../../public/galleryImages/change.png";
import Image from "next/image";
import { useState, Fragment } from "react";

const DesktopGallery = () => {
  const [galleryState, setGalleryState] = useState(true);
  const switchGalleryHandler = () => {
    setGalleryState(!galleryState);
  };
};

export default DesktopGallery;
