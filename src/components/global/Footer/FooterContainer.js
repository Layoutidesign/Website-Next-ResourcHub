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
} from "@/data/static-data";

const SocialMediaLink = ({ url, icon }) => {
  return (
    <span>
      <a href={url} target="blank">
        <FontAwesomeIcon icon={icon} />
      </a>
    </span>
  );
};

const ContainerLinksComponent = ({ title, links, type }) => {
  return (
    <Col>
      <Row>
        <Col>
          <h3 className="fs-5 fw-bolder">{title}</h3>
          <ul className={styles["footer_navs"]}>
            {links.map((link, i) => (
              <li key={i}>
                {type === "internal" ? (
                  <Link className={styles["footer_navs_link"]} href={link.url}>
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

const FooterContainer = () => {
  const [col1, setcol1] = useState(false);
  const [col2, setcol2] = useState(false);
  const [col3, setcol3] = useState(false);

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

  return (
    <main>
      <Container>
        <Row>
          <Col lg={6} sm={12} className={styles["foot_head"]}>
            <Row className="align-items-center flex-nowrap m-0">
              <Col lg={2} xs={3} className="p-0 ">
                <a href="https://www.layouti.com/" target="_blank">
                  <LayoutliLogoWhiteIcon />
                </a>
              </Col>
              <Col lg={10} xs={9} className="p-0">
                <h2 className={`${styles["footer_brand"]} m-0 fs-3`}>
                  Layouti
                </h2>
                <p className={`${styles["footer_slug"]} m-0 fs-6 fw-lighter`}>
                  Great idea, deservers great layout
                </p>
              </Col>
            </Row>
            <Row className="mt-4 m-0">
              <p className={`${styles["footer_desc"]} p-0 fs-6 fw-lighter`}>
                Looking good is great. But it is just the first step, helping
                you move your business. Indeed, these are more than just case
                studies, it is reimagining figure business in the digital era.
              </p>
            </Row>
            <Row className="mt-3 m-0">
              <div className={styles["footer_social"]}>
                {socialMediaLinks.map((link) => (
                  <SocialMediaLink
                    key={link.url}
                    url={link.url}
                    icon={link.icon}
                  />
                ))}
              </div>
            </Row>
          </Col>
          <Col lg={6} sm={12} className={styles["desc_foot"]}>
            <Row>
              {
                <>
                  <ContainerLinksComponent
                    links={mainMenuLinks}
                    title="Main Menu"
                    type="internal"
                  />
                  <ContainerLinksComponent
                    links={otherLinks}
                    title="Other Links"
                    type="internal"
                  />
                  <ContainerLinksComponent
                    links={helpLinks}
                    title="Help?"
                    type="external"
                  />
                </>
              }
            </Row>
          </Col>

          <Col lg={6} sm={12} className={`${styles["mobile_foot"]} mt-4 p-0`}>
            <div className="accordion" id="accordion">
              <div className={styles["accordion-item"]}>
                <h2 className="accordion-header" id="headingOne">
                  <button
                    // className={`${
                    //   styles[("accordion-button-footer", " accordion-button")]
                    // } fw-medium collapsed: ${!col1} `}
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
                    // className={`${
                    //   styles[("accordion-button-footer", " accordion-button")]
                    // } fw-medium collapsed: ${!col2} `}
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
                    // className={`${
                    //   styles[("accordion-button-footer", " accordion-button")]
                    // } fw-medium collapsed: ${!col3} `}
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
    </main>
  );
};

export default FooterContainer;
