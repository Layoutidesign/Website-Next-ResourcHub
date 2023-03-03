/** @format */

import Image from "next/image";
import { Col, Container, Row } from "reactstrap";

import styles from "./Content.module.scss";

const FirstContentSection = ({ title, description, image, images }) => {
  console.log(images);
  return (
    <div
      className={styles["firstContentSection"]}
      style={{ backgroundImage: `url("${image}")` }}
    >
      <Container>
        <Row className={styles["images_section"]}>
          {images.map((image, i) => (
            <Col key={image.id}>
              <Image
                className={styles[`img_fixed_${i}`]}
                src={image.image}
                width={230}
                height={370}
              />
            </Col>
          ))}
        </Row>
        <Row>
          <Col className={styles["pl"]} xs={12} md={6}>
            <h2>{title && title}</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="p-0">
            <p>{description && description}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FirstContentSection;
