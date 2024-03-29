/** @format */

import { Container, Row } from "reactstrap";
import CategoryCard from "@/components/global/Cards/CategoryCard/CategoryCard";

import styles from "./Categories.module.scss";
import DesktopSearch from "@/components/global/Search/DesktopSearch/DesktopSearch";

const Categories = ({ categories }) => {
  return (
    <section className={styles["categories"]}>
      <Container>
        <DesktopSearch  />
        <Row className="g-4">
          {categories.map((category, i) => (
            <CategoryCard key={i} icon={category?.icon} name={category?.name} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Categories;
