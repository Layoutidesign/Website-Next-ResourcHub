/** @format */

import Image from "next/image";
import { Container } from "reactstrap";
import styles from "./FirstContentSection.module.scss";

const FirstContentSection = ({ title, description, vector }) => {
  return (
    <section
      className={styles["firstContentSection"]}
      style={{ backgroundImage: `url("${vector}")` }}
    >
      <Container>
        <div className={styles["text"]}>
          <h1>{title && title}</h1>
          <p>{description && description}</p>
        </div>
      </Container>
    </section>
  );
};

export default FirstContentSection;
