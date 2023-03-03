/** @format */

import { Col, Row } from "reactstrap";
import styles from "./InnerPage.module.scss";

const ResourcesFilter = ({ tags, setFilter }) => {
  const handleSubmit = (e) => {
    setFilter(filter => filter.concat(e.target.value));
  };
  return (
    <div className={styles["resourcesFilter"]}>
        {tags?.map((tag, i) => (
            <label key={i} htmlFor={tag?.title}><input type="checkbox" value={tag?.title} onChange={(e) => handleSubmit(e)} id={tag?.title} />{tag?.title}</label>
        ))}
    </div>
  );
};

export default ResourcesFilter;
