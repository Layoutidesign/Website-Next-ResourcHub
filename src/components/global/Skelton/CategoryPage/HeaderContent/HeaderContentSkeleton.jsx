import Shimmer from "../../Shimmer/Shimmer";
import styles from "./HeaderContentSkeleton.module.scss";

import { Container } from "reactstrap";

const HeaderContentSkeleton = () => {
  return (
    <div className={styles["headerContent"]}>
      <Container className="p-0">
        <section className={styles["firstSection"]}>
          <p>
            <Shimmer />
          </p>
          <p>
            <Shimmer />
          </p>
          <p>
            <Shimmer />
          </p>
        </section>
        <section className={styles["secondSection"]}>
          <p>
            <Shimmer />
          </p>
          <p>
            <Shimmer />
          </p>
          <p>
            <Shimmer />
          </p>
        </section>
      </Container>
    </div>
  );
};

export default HeaderContentSkeleton;
