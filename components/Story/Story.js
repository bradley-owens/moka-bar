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
        <p>background-circle</p>
      </div>
      <div className={styles.main}>
        <div className={styles.header}>
          <h1>About Moka</h1>
        </div>
        <div className={styles.body}>
          <p>
            MoKa Bar is a locally owned café in the heart of the JCU Campus.
            Open 5 days a week, MoKa Bar strives to serve the very best
            including a range of homemade goodies and locally roasted coffee
            provided by Sipping Duck. We also provide catering for local
            business and residents, which can be tailored for your requirements.
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
