/** @format */

import Image from "next/image";
import Link from "next/link";

import { Col } from "reactstrap";

import styles from "./SubCategoryCard.module.scss";

import { EyeIcon } from "@/components/global/Svgs";

const SubCategoryCard = ({ subCategory }) => {
  return (
    <Col xs={12} md={4}>
      <Link
        href={`/resources/${subCategory?.Category?.name}/${subCategory?.name}`}
        className={styles["subCategoryCard"]}
      >
        <div className={styles["imageContainer"]}>
          <div dangerouslySetInnerHTML={{ __html: subCategory.icon }} />
        </div>
        <div className={styles["textContainer"]}>
          <h2>{subCategory.name}</h2>
          <p>{subCategory.description}</p>
          <div className={styles["viewsContainer"]}>
            <EyeIcon />
            <p>
              <span>{subCategory.Viwers}</span> Views
            </p>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default SubCategoryCard;
