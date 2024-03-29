/** @format */

import Image from "next/image";
import Link from "next/link";

import { Col } from "reactstrap";

import styles from "./SubCategoryCard.module.scss";

import { EyeIcon } from "@/components/global/Svgs";

const SubCategoryCard = ({ subCategory, params }) => {
  return (
    <Col xs={12} md={4}>
      <Link
        href={`/resources/${params.toLowerCase().split(" ").join("-")}/${subCategory?.name.toLowerCase().split(" ").join("-")}`}
        className={styles["subCategoryCard"]}
      >
        <div className={styles["imageContainer"]}>
          <Image src={subCategory.icon} width={100} height={100} alt=""/>
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
