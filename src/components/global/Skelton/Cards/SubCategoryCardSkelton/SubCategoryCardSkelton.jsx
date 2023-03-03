/** @format */

import { Col } from "reactstrap";
import Shimmer from "../../Shimmer/Shimmer";
import styles from "./SubCategoryCardSkelton.module.scss";

const SubCategoryCardSkelton = () => {
  return (
    <Col xs={12} md={4}>
      <div className={styles["subCategoryCard"]}>
        <header>
          <div className={styles["imageContainer"]}>
            <Shimmer />
          </div>
        </header>
        <main>
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
    </Col>
  );
};

export default SubCategoryCardSkelton;
