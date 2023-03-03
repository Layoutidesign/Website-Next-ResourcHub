/** @format */

import { Col, Row } from "reactstrap";
import styles from "./InnerPage.module.scss";
import "checkboxes/dist/css/checkboxes.min.css";

const ResourcesFilter = ({ tags, setFilter }) => {
  const handleSubmit = (e) => {
    if (e.target.checked) {
      setFilter((filter) => filter.concat(e.target.value));
    } else {
      setFilter((filter) => filter?.filter((item) => item != e.target.value));
    }
  };
  return (
    <div className={styles["resourcesFilter"]}>
        {tags?.map((tag, i) => (
            <label key={i} htmlFor={tag?.title}>
            <input
              type="checkbox"
              className={"checkbox"}
              style={{
                "--bg": tag.color,
                "--color": "#192B49",
                "--size": "20px",
                "--radius": "6px",
              }}
              value={tag?.title}
              onChange={(e) => handleSubmit(e)}
              id={tag?.title}
            />
            {tag?.title}
          </label>
        ))}
    </div>
  );
};

export default ResourcesFilter;
