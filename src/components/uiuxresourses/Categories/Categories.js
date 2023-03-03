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
import axios from "axios";
import UiUxResourcesServices from "@/services/uiUxResources.services";
import { useRouter } from "next/router";

const Categories = ({ categories, params, categoriesData  }) => {
  const categoryTitles = categories.map((category) => category.name);
  const router = useRouter() 
  const changeCategory  = (categ) => {
    router.push(`/resources/${categ.split(" ").join("-")}`)
  }

  
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
              setActiveTab={changeCategory}
              activeTab={params}
            />
          </div>

          <Col xs={12} className="d-md-none">
            <TabHeaderForMobile
              tabHeaderData={categoryTitles}
              setActiveTab={changeCategory}
              activeTab={params}
            />
          </Col>
          <Col xs={12} md={8}>
            <Row className="g-4">
              {categoriesData?.subCategoeries?.map((subCategory, i) => (
                <SubCategoryCard key={i} subCategory={subCategory} params={params}/>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Categories;

