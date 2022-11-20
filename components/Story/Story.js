import React from "react";
import Image from "next/image";
import styles from "./Story.module.css";
import storyImg from "../../public/story.png";

const Story = () => {
  return (
    <div className={styles.container}>
      <div className={styles.x}>
        <p> background-circle</p>
      </div>
      <div className={styles.y}>
        <p> background-circle</p>
      </div>
      <div className={styles.main}>
        <div className={styles.header}>
          <h1>About Moka</h1>
        </div>
        <div className={styles.body}>
          <p>
            Moka Bar is an independent coffee roaster and eatery. We pride
            ourselves on the coffee that is roasted by us each week as we seek
            to deliver to our customers, the most beautiful and wondrous
            flavours imaginable.
          </p>
          <Image
            className={styles["story-img"]}
            src={storyImg}
            alt="story-img"
            width="2px"
          />
        </div>
      </div>
    </div>
  );
};

export default Story;
