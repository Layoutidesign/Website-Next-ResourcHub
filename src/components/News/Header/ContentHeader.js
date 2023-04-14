/** @format */

import { Col, Container, Row } from "reactstrap";
import styles from "./InnerPage.module.scss";
import Link from "next/link";

const ContentHeader = ({
  categoryName,
  subCategoryName,
  subCategoryDescription,
  numberOfPages,
  count
}) => {
 
  return (
    <div className={styles["contentHeader"]} >
      <Container className="">
        <Row>
          <Col>
          <div className={styles["title"]}>
          <h2>
            {/* <Link href={'/resources'}><span><u>Home</u>{" "} . {" "}</span></Link>
            {categoryName&&<Link href={`/news`}><span><u>{categoryName && categoryName}</u>{" "} . {" "}</span></Link>}
            {subCategoryName && subCategoryName}
          <span className={styles["numberOfPages"]}>
              ({count})
          </span> */}
          Latest News
          </h2>
        </div>
        <p>{subCategoryDescription && subCategoryDescription}</p>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
};

export default ContentHeader;
