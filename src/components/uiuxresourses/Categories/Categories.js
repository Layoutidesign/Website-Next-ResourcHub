/** @format */

import { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Masonry from "react-masonry-css";

import TabHeader from "@/components/global/Tab/TabHeader";
import TabHeaderForMobile from "@/components/global/Tab/TabHeaderForMobile";
import SubCategoryCard from "@/components/global/Cards/SubCategoryCard/SubCategoryCard";
import InnerPageCard from "@/components/global/Cards/InnerPageCard/InnerPageCard";

import styles from "./Categories.module.scss";
import Link from "next/link";

const Categories = ({ categories, params  }) => {
  const [activeCategory, setActiveCategory] = useState(params);
  const [categoryDisplayed, setCategoryDisplayed] = useState(categories.filter(category => category.name == params)[0]);

  const categoryTitles = categories.map((category) => category.name);

  useEffect(() => {
    setCategoryDisplayed(cat => categories.filter(category => category.name == activeCategory)[0]);
    console.log(categories.filter(category => category.name == activeCategory));
  }, [activeCategory]);

  return (
    <div className={styles["categories"]}>
      <Container>
      <div className={styles["title"]}>
          <h2>
            <Link href={'/resources'}><span><u>Home</u>{" "} . {" "}</span></Link>
            {params}
          </h2>
        </div>

        <Row className="gx-1 justify-content-between">
          <div  className={`${styles["tab_left"]} tab_left p-0 d-none d-md-block`}>
            <TabHeader
              tabHeaderData={categoryTitles}
              setActiveTab={setActiveCategory}
              activeTab={activeCategory}
            />
          </div>

          <Col xs={12} className="d-md-none">
            <TabHeaderForMobile
              tabHeaderData={categoryTitles}
              setActiveTab={setActiveCategory}
              activeTab={activeCategory}
            />
          </Col>
          {console.log(categoryDisplayed)}
          {categoryDisplayed?.subCategoeries?.length === 0 ? (
            <>
              <Col xs={12} md={8}>
                <Row className={styles["leftSpacingForInnerCards"]}>
                  <Masonry
                    breakpointCols={{ default: 3, 768: 2 }}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {categoryDisplayed?.InnerPage?.map((innerPage, i) => (
                      <InnerPageCard
                        innerPage={innerPage}
                        key={innerPage?.id || i}
                      />
                    ))}
                  </Masonry>
                </Row>
              </Col>
            </>
          ) : (
            <>
              <Col xs={12} md={8}>
                <Row className="g-4">
                  {categoryDisplayed?.subCategoeries?.map((subCategory, i) => (
                    <SubCategoryCard key={i} subCategory={subCategory} />
                  ))}
                </Row>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Categories;

