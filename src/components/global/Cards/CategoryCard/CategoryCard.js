/** @format */

import Link from "next/link";
import Image from "next/image";

import { Col } from "reactstrap";

import styles from "./CategoryCard.module.scss";

import { TestIcon } from "@/components/global/Svgs";

const CategoryCard = ({ icon, name }) => {
  return (
    <Col xs={6} md={3}>
      <Link href={`/resources/${name.split(" ").join("-")}`} className={styles["categoryCard"]}>
        <div>
          <div className={styles["imageContainer"]}>
            <Image src={icon} width="80" height={80} alt=""/>
          </div>
        </div>
        <p>{name}</p>
      </Link>
    </Col>
  );
};

export default CategoryCard;
