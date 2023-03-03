import Shimmer from "../../Shimmer/Shimmer";

import styles from "./HeaderContentSkeleton.module.scss";

const HeaderContentSkeleton = () => {
  return (
    <div className={styles["headerContent"]}>
      <p>
        <Shimmer />
      </p>
      <p>
        <Shimmer />
      </p>
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
  );
};

export default HeaderContentSkeleton;
