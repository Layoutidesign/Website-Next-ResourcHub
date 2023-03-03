/** @format */

import { useRouter } from "next/router";

import { Container } from "reactstrap";

import styles from "./InnerPage.module.scss";

import { BackArrowIcon } from "@/components/global/Svgs";
import Link from "next/link";

const ContentHeader = ({
  categoryName,
  subCategoryName,
  subCategoryDescription,
}) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div className={styles["contentHeader"]}>
      <Container className="p-0">
        <div className={styles["title"]}>
          <h2>
            <Link href={'/resources'}><span><u>Home</u>{" "} . {" "}</span></Link>
            <Link href={`/resources/${categoryName}`}><span><u>{categoryName && categoryName}</u>{" "} . {" "}</span></Link>
            {subCategoryName && subCategoryName}
          </h2>
        </div>
        <p>{subCategoryDescription && subCategoryDescription}</p>
      </Container>
    </div>
  );
};

export default ContentHeader;
