import Shimmer from "../../Shimmer/Shimmer";
import styles from "./Breadcrumb.module.scss";

const BreadcrumbSkeleton = () => {
  return (
    <div className={styles["breadcrumb"]}>
      <Shimmer />
    </div>
  );
};

export default BreadcrumbSkeleton;
