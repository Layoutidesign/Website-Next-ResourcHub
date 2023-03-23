/** @format */

import { Container } from "reactstrap";

import styles from "./WorkTogetherSection.module.scss";

const WorkTogetherSection = ({ title, description, setShowPopup }) => {
  const handleShow = () => setShowPopup(true);
  return (
    <section className={styles["workTogetherSection"]} onClick={handleShow}>
      <Container>
        <p>{title ? title : "Work On!"}</p>
        <h2>
          {description
            ? description
            : "Let's work together to create a fantastic resources website! in addition to being one of the biggest websites in the world."}
        </h2>
      </Container>
    </section>
  );
};

export default WorkTogetherSection;
