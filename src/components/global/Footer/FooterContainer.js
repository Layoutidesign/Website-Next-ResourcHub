/** @format */

import { useState } from "react";
import Link from "next/link";
import classnames from "classnames";
import { Container, Row, Col, Collapse } from "reactstrap";
import styles from "./Footer.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { LayoutliLogoWhiteIcon } from "../Svgs";

import {
  otherLinks,
  mainMenuLinks,
  helpLinks,
  socialMediaLinks,
  layoutiLinks,
} from "@/data/static-data";
import Image from "next/image";

const SocialMediaLink = ({ url, icon }) => {
  return (
    <span>
      <a href={url} target="blank">
        <Image src={icon} width={25} height={25}/>
      </a>
    </span>
  );  
};

const ContainerLinksComponent = ({ title, links, type }) => {
  return (
    <Col>
      <Row>
        <Col>
          <h3 className="fs-4 fw-bolder">{title}</h3>
          <ul className={styles["footer_navs"]}>
            {links.map((link, i) => (
              <li key={i}>
                {type === "internal" ? (
                  <Link className={styles["footer_navs_link"]} href={link.url} >
                    {link.text}
                  </Link>
                ) : (
                  <a
                    className={styles["footer_navs_link"]}
                    href={link.url}
                    target="_blank"
                  >
                    {link.text}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Col>
  );
};




const AccordionBody = ({ links, type }) => {
  return (
    <div className={styles["accordion-body"]}>
      <ul className={styles["footer_navs"]}>
        {links.map((link) => (
          <li key={link.url}>
            {type === "internal" ? (
              <Link className={styles["footer_navs_link"]} href={link.url}>
                {link.text}
              </Link>
            ) : (
              <a className={styles["footer_navs_link"]} href={link.url}>
                {link.text}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const FooterContainer = ({data}) => {
  const [col1, setcol1] = useState(false);
  const [col2, setcol2] = useState(false);
  const [col3, setcol3] = useState(false);
  const [col4, setcol4] = useState(false);

  const t_col1 = () => {
    setcol1(!col1);
    setcol2(false);
    setcol3(false);
  };

  const t_col2 = () => {
    setcol2(!col2);
    setcol1(false);
    setcol3(false);
  };

  const t_col3 = () => {
    setcol3(!col3);
    setcol1(false);
    setcol2(false);
  };         
  const t_col4 = () => {
    setcol4(!col4);
    setcol1(false);
    setcol2(false);
    setcol3(false);
  };         

  return (
    <>
    {data && <main style={{backgroundColor: data?.FooterColors?.meddleColor, color:  data?.FooterColors.fontColor}}>
      <Container>
        <Row>
          <Col lg={5} sm={12} className={styles["foot_head"]}>
            <Row className="align-items-center flex-nowrap m-0">
              <Col lg={2} xs={3} className="p-0 ">
                <a href="https://www.layouti.com/" target="_blank">
                  <Image src={data?.FooterContent?.logo} width={200} height={75}/>
                </a>
              </Col>
              {/* <Col lg={10} xs={9} className="p-0">
                <h2 className={`${styles["footer_brand"]} m-0 fs-3`}>
                  {data.FooterContent.name}
                </h2>
                <p className={`${styles["footer_slug"]} m-0 fs-6 fw-lighter`}>
                  {data.FooterContent.slogan}
                </p>
              </Col> */}
            </Row>
            <Row className="mt-3 m-0 ">
              <p className={`${styles["footer_desc"]} p-0 fs-6 fw-bold`}>
                {data?.FooterContent.slogan}
              </p>
            </Row>
            <Row className="m-0">
              <p className={`${styles["footer_desc"]} p-0 fs-6 fw-lighter`}>
                {data?.FooterContent.description}
              </p>
            </Row>
            <Row className="mt-3 m-0">
              <div className={styles["footer_social"]}>
                {data.FooterSocialMedia.map((link) => (
                  <SocialMediaLink
                    key={link.url}
                    url={link.link}
                    icon={link.image}
                  />
                ))}
              </div>
            </Row>
          </Col>
          <Col lg={7} sm={12} className={styles["desc_foot"]}>
            <Row>
                <>
                  <ContainerLinksComponent
                    links={mainMenuLinks}
                    title="Main Menu"
                    type="internal"
                  />
                </>
                <>
                  <ContainerLinksComponent
                    links={layoutiLinks}
                    title="Layouti"
                  />
                </>
                <>
                  <ContainerLinksComponent
                    links={otherLinks}
                    title="Other Links"
                  />
                </>
               
                <>
                  <ContainerLinksComponent
                    links={helpLinks}
                    title="Help?"
                  />
                </>
            </Row>
          </Col>

          




          <Col lg={6} sm={12} className={`${styles["mobile_foot"]} mt-4 p-0`}>
            <div className="accordion" id="accordion">
              <div className={styles["accordion-item"]}>
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className={classnames("fw-medium", { collapsed: !col1 })}
                    type="button"
                    onClick={t_col1}
                    style={{ cursor: "pointer" }}
                  >
                    <h3 className="fs-md-5 fs-6 m-0">Main Menu</h3>
                  </button>
                </h2>

                <Collapse isOpen={col1} className="accordion-collapse">
                  <AccordionBody links={mainMenuLinks} type="internal" />
                </Collapse>
              </div>


              <div className={styles["accordion-item"]}>
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className={classnames("fw-medium", { collapsed: !col4 })}
                    type="button"
                    onClick={t_col4}
                    style={{ cursor: "pointer" }}
                  >
                    <h3 className="fs-md-5 fs-6 m-0">Layouti</h3>
                  </button>
                </h2>
                <Collapse isOpen={col4} className="accordion-collapse">
                  <AccordionBody links={layoutiLinks} type="internal" />
                </Collapse>
              </div>

              <div className={styles["accordion-item"]}>
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className={classnames("fw-medium", { collapsed: !col2 })}
                    type="button"
                    onClick={t_col2}
                    style={{ cursor: "pointer" }}
                  >
                    <h3 className="fs-md-5 fs-6 m-0">Other Links</h3>
                  </button>
                </h2>

                <Collapse isOpen={col2} className="accordion-collapse">
                  <AccordionBody links={otherLinks} type="internal" />
                </Collapse>
              </div>

              <div className={styles["accordion-item"]}>
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className={classnames("fw-medium", { collapsed: !col3 })}
                    type="button"
                    onClick={t_col3}
                    style={{ cursor: "pointer" }}
                  >
                    <h3 className="fs-md-5 fs-6 m-0">Helps?</h3>
                  </button>
                </h2>
                <Collapse isOpen={col3} className="accordion-collapse">
                  <AccordionBody links={helpLinks} type="external" />
                </Collapse>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>}</>
  );
};

export default FooterContainer;
