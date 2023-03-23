/** @format */

import { Col, Container, Row } from "reactstrap";
import styles from "./InnerPage.module.scss";
import Link from "next/link";

const ContentHeader = ({
  categoryName,
  subCategoryName,
  subCategoryDescription,
  numberOfPages
}) => {
 
  return (
    <div className={styles["contentHeader"]} style={!subCategoryDescription?{paddingBottom: 0}: {paddingBottom: "80px"}}>
      <Container className="">
        <Row>
          <Col>
          <div className={styles["title"]}>
          <h2>
            <Link href={'/resources'}><span><u>Home</u>{" "} . {" "}</span></Link>
            {categoryName&&<Link href={`/resources/${categoryName}`}><span><u>{categoryName && categoryName}</u>{" "} . {" "}</span></Link>}
            {subCategoryName && subCategoryName}
          <span className={styles["numberOfPages"]}>
              ({numberOfPages && numberOfPages})
          </span>
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
