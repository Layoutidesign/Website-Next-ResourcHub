/** @format */

import Image from "next/image";
import { Container } from "reactstrap";
import styles from "./FirstContentSection.module.scss";

const FirstContentSectionHome = ({ title, description, image, imageForMobile, subTitle, subDescription }) => {
  return (
    <section
      className={styles["firstContentSection"]}
    >
      <Container>
        <div className={styles["text"]}>
          <h1>{title && title}</h1>
          <p className="d-none d-md-block" >{description && description}</p>
        </div>
      </Container>
      <img className="d-none d-md-block" src={image} alt=""/>
      <img className="d-md-none" src={imageForMobile} alt=""/>
      <Container>
        <div className={styles["secondContent"]}>
          <h1>{subTitle}</h1>
          <p className="" >{subDescription}</p>
        </div>
      </Container>
    </section>
  );
};

export default FirstContentSectionHome;
