import { Col } from "reactstrap";
import Shimmer from "../../Shimmer/Shimmer";
import styles from "./CategoryCard.module.scss";

const CategoryCardSkelton = () => {
  return (
    <Col xs={6} md={3}>
      <div className={styles["categoryCard"]}>
        <div>
          <div className={styles["imageContainer"]}>
            <Shimmer />
          </div>
        </div>
        <div className={styles["textContainer"]}>
          <Shimmer />
        </div>
      </div>
    </Col>
  );
};

export default CategoryCardSkelton;
