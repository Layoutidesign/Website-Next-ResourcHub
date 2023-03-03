import Shimmer from "../../Shimmer/Shimmer";
import styles from "./MainTitle.module.scss";

const MainTitleSkeleton = () => {
  return (
    <div className={styles["mainTitle"]}>
      <Shimmer />
    </div>
  );
};

export default MainTitleSkeleton;
