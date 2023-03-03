import { Container } from "reactstrap";
import Shimmer from "../../Shimmer/Shimmer";
import styles from "./HeaderContentSkeleton.module.scss";

const HeaderContentSkeleton = () => {
  return (
    <Container>
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
      </div>
    </Container>
  );
};

export default HeaderContentSkeleton;
