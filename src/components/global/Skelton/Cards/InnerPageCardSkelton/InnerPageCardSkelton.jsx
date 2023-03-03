/** @format */

import Shimmer from "../../Shimmer/Shimmer";
import styles from "./InnerPageCardSkelton.module.scss";

const InnerPageCardSkelton = () => {
  return (
    <div className={styles["innerPageCard"]}>
      <header>
        <div className={styles["imageContainer"]}>
          <Shimmer />
        </div>
      </header>
      <main>
        <div className={styles["topTags"]}>
          <p>
            <Shimmer />
          </p>
          <p>
            <Shimmer />
          </p>
        </div>
        <div className={styles["text"]}>
          <h4>
            <Shimmer />
          </h4>
          <p>
            <Shimmer />
          </p>
          <p>
            <Shimmer />
          </p>
          <p>
            <Shimmer />
          </p>
        </div>
        <div className={styles["bottomTags"]}>
          <p>
            <Shimmer />
          </p>
        </div>
        <footer>
          <div className={styles["img"]}>
            <Shimmer />
          </div>
          <div className={styles["text"]}>
            <Shimmer />
          </div>
        </footer>
      </main>
    </div>
  );
};

export default InnerPageCardSkelton;
