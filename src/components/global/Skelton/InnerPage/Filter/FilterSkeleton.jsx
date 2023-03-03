import { Container } from "reactstrap";
import Shimmer from "../../Shimmer/Shimmer";
import styles from "./FilterSkeleton.module.scss";

const FilterSkeleton = () => {
  return (
    <div className={styles["parent"]}>
      <Container>
        <div className={styles["filter"]}>
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
      </Container>
    </div>
  );
};

export default FilterSkeleton;
