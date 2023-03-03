import Shimmer from "../../Shimmer/Shimmer";
import styles from "./TabsSkeleton.module.scss";

const TabsSkeleton = () => {
  return (
    <div className={styles["tabsSkeleton"]}>
      <div className={styles["tab"]}>
        <div className={styles["text"]}>
          <Shimmer />
        </div>
        <div className={styles["icon"]}>
          <Shimmer />
        </div>
      </div>
      <div className={styles["tab"]}>
        <div className={styles["text"]}>
          <Shimmer />
        </div>
        <div className={styles["icon"]}>
          <Shimmer />
        </div>
      </div>
    </div>
  );
};

export default TabsSkeleton;
