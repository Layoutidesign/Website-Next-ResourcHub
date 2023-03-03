/** @format */

import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row, Collapse } from "reactstrap";
import classnames from "classnames";

import styles from "./Sidebar.module.scss";

import {
  TopRightArrowIcon,
  AcademyLogoIcon,
  UiAvatarLogoIcon,
  Ui365DesignIcon,
  EToyAppIcon,
  ScanSmileIcon,
  ExitButtonWhiteIcon,
} from "@/components/global/Svgs";

import { useState } from "react";
import { LayoutliLogoWhiteIcon } from "../Svgs";

import { otherLinks, mainMenuLinks, helpLinks } from "@/data/static-data";

const ContainerLinksComponent = ({ title, links, type }) => {
  return (
    <Row className="m-0 mb-4">
      <Col className={`${styles["side_navbar_one"]} p-0`}>
        <h3 className="fs-5 fw-bolder">{title}</h3>
        <ul className={`${styles["footer_navs"]} mt-4`}>
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
  );
};

const internalLinks = [
  {
    Image: AcademyLogoIcon,
    text: "Academy",
    url: "/",
  },
  {
    Image: UiAvatarLogoIcon,
    text: "UI Avatar Design",
    url: "/",
  },
  {
    Image: Ui365DesignIcon,
    text: "365 UI Design",
    url: "/",
  },
];
const externalLinks = [
  {
    Image: EToyAppIcon,
    text: "eToy App",
    url: "https://etoyapp.store/",
  },
  {
    Image: ScanSmileIcon,
    text: "Scan Smile",
    url: "https://restaurant.layouti.com/",
  },
];

const LinkComponent = ({ Image, text, url, type }) => {
  return (
    <Row className="m-0 mb-4">
      <Col className="p-0">
        <div
          className={`${styles["footer__link__row"]} d-flex align-items-center gap-4`}
        >
          <Image />
          <h3 className="m-0">{text}</h3>
        </div>
      </Col>
      <Col className="d-flex align-items-center justify-content-end">
        {type === "internal" ? (
          <Link href={url} className={styles["external__link"]}>
            <TopRightArrowIcon />
          </Link>
        ) : (
          <a href={url} target="blank" className={styles["external__link"]}>
            <TopRightArrowIcon />
          </a>
        )}
      </Col>
    </Row>
  );
};

const ContainerProductsComponent = ({ title, links, type }) => {
  return (
    <>
      <h3
        className={`${styles["footer__external__title"]}} fs-5 mb-4 fw-bolder`}
      >
        {title}
      </h3>
      {links.map((link, i) => (
        <LinkComponent
          key={i}
          Image={link.Image}
          text={link.text}
          url={link.url}
          type={type}
        />
      ))}
    </>
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

const AccordionBodyForProducts = ({ links, type }) => {
  return (
    <div className={styles["accordion-body"]}>
      {links.map((link, i) => (
        <LinkComponent
          key={i}
          Image={link.Image}
          text={link.text}
          url={link.url}
          type={type}
        />
      ))}
    </div>
  );
};

const Sidebar = () => {
  const [col1, setcol1] = useState(false);
  const [col2, setcol2] = useState(false);
  const [col3, setcol3] = useState(false);
  const [col4, setcol4] = useState(false);
  const [col5, setcol5] = useState(false);

  const t_col1 = () => {
    setcol1(!col1);
    setcol2(false);
    setcol3(false);
    setcol4(false);
    setcol5(false);
  };

  const t_col2 = () => {
    setcol2(!col2);
    setcol1(false);
    setcol3(false);
    setcol4(false);
    setcol5(false);
  };

  const t_col3 = () => {
    setcol3(!col3);
    setcol1(false);
    setcol2(false);
    setcol4(false);
    setcol5(false);
  };

  const t_col4 = () => {
    /* eslint-disable-line */
    setcol4(!col4);
    setcol1(false);
    setcol2(false);
    setcol3(false);
    setcol5(false);
  };
  const t_col5 = () => {
    /* eslint-disable-line */
    setcol5(!col5);
    setcol1(false);
    setcol2(false);
    setcol4(false);
    setcol3(false);
  };

  function sideToggle() {
    document.querySelector(".sidebar").classList.toggle("active");
  }

  return (
    <div className={`${styles["sidebar"]} sidebar`}>
      <Container className={styles["sidebar_container"]}>
        <Row
          className={`${styles["side_header"]} justify-content-between align-items-center `}
        >
          <Col className="p-0">
            <Row className="align-items-center flex-nowrap gap-2 m-0">
              <Col lg={1} md={2} xs={4} className="">
                <a href="https://www.layouti.com/" target="_blank">
                  <LayoutliLogoWhiteIcon
                    className={styles["sidebar-menu__logo"]}
                  />{" "}
                </a>
              </Col>
              <Col
                lg={11}
                md={10}
                xs={8}
                className={styles["side_header_title"]}
              >
                <h2 className={`${styles["footer_brand"]} m-0 fs-md-3 fs-4`}>
                  Layouti
                </h2>
                <p
                  className={`${
                    styles[("footer_slug", "side_header_slug")]
                  } m-0 fs-md-6 fw-lighter`}
                >
                  Great idea, desevers great layout
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs="2">
            <button className={styles["toggle_close"]} onClick={sideToggle}>
              <ExitButtonWhiteIcon />
            </button>
          </Col>
        </Row>
        <Row className="m-0 gap-4">
          <Col className={`${styles["desc_foot"]} p-2 mt-5 `}>
            <ContainerLinksComponent
              links={mainMenuLinks}
              title="Main Menu"
              type="internal"
            />
          </Col>
          <Col className={`${styles["desc_foot"]} p-0 mt-5 col-4`}>
            <ContainerProductsComponent
              title="Our Products"
              links={internalLinks}
              type="internal"
            />
            <ContainerProductsComponent
              title="In-house Works"
              links={externalLinks}
              type="external"
            />
          </Col>
          <Col className={`${styles["desc_foot"]} p-0 mt-5`}>
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
          </Col>
          <Col className={`${styles["desc_foot"]} p-0 mt-5`}>
            <Row className="mb-4">
              <Col>
                <h3 className="fs-5 fw-bolder">Hire us</h3>
                <ul className={`${styles["side_navs"]} mt-4 `}>
                  <li>
                    <p className="m-0  w-70">
                      Great ideas get more hits with great layouts. Therefore,
                      we design.
                    </p>
                  </li>
                  <li
                    className={`${styles[("nav_item", "nav_item_btn")]}  mt-2`}
                  >
                    {/* <a className='nav_item_link' onClick={sideToggle} href='https://365design.layouti.com/layouti-tree/' target='blank'>Reach out</a> */}
                    <Link
                      className={styles["nav_item_link"]}
                      onClick={sideToggle}
                      href="/contact-us?scroll=true"
                    >
                      Reach out
                    </Link>
                  </li>
                </ul>
              </Col>
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
                    // } fw-medium collapsed: ${!col1} `}
                    className={classnames("fw-medium", { collapsed: !col2 })}
                    type="button"
                    onClick={t_col2}
                    style={{ cursor: "pointer" }}
                  >
                    <h3 className="fs-md-5 fs-6 m-0">Our Products</h3>
                  </button>
                </h2>

                <Collapse isOpen={col2} className="accordion-collapse">
                  <AccordionBodyForProducts
                    links={internalLinks}
                    type="internal"
                  />
                </Collapse>
              </div>

              <div className={styles["accordion-item"]}>
                <h2 className="accordion-header" id="headingThree">
                  <button
                    // className={`${
                    //   styles[("accordion-button-footer", " accordion-button")]
                    // } fw-medium collapsed: ${!col1} `}
                    className={classnames("fw-medium", { collapsed: !col3 })}
                    type="button"
                    onClick={t_col3}
                    style={{ cursor: "pointer" }}
                  >
                    <h3 className="fs-md-5 fs-6 m-0">In-house Works</h3>
                  </button>
                </h2>

                <Collapse isOpen={col3} className="accordion-collapse">
                  <AccordionBodyForProducts
                    links={externalLinks}
                    type="external"
                  />
                </Collapse>
              </div>

              <div className={styles["accordion-item"]}>
                <h2 className="accordion-header" id="headingFour">
                  <button
                    // className={`${
                    //   styles[("accordion-button-footer", " accordion-button")]
                    // } fw-medium collapsed: ${!col2} `}
                    className={classnames("fw-medium", { collapsed: !col4 })}
                    type="button"
                    onClick={t_col4}
                    style={{ cursor: "pointer" }}
                  >
                    <h3 className="fs-md-5 fs-6 m-0">Other Links</h3>
                  </button>
                </h2>

                <Collapse isOpen={col4} className="accordion-collapse">
                  <AccordionBody links={otherLinks} type="internal" />
                </Collapse>
              </div>

              <div className={styles["accordion-item"]}>
                <h2 className="accordion-header" id="headingFive">
                  <button
                    // className={`${
                    //   styles[("accordion-button-footer", " accordion-button")]
                    // } fw-medium collapsed: ${!col3} `}
                    className={classnames("fw-medium", { collapsed: !col5 })}
                    type="button"
                    onClick={t_col5}
                    style={{ cursor: "pointer" }}
                  >
                    <h3 className="fs-md-5 fs-6 m-0">Helps?</h3>
                  </button>
                </h2>
                <Collapse isOpen={col5} className="accordion-collapse">
                  <AccordionBody links={helpLinks} type="external" />
                </Collapse>
              </div>
            </div>
            <Row
              style={{ paddingLeft: "20px", paddingRight: "20px" }}
              className="m-0 ml-2 mr-2"
            >
              <Col className="mt-4 p-0">
                <h3 className="fs-5 fw-bolder">Hire us</h3>
                <ul className={styles["side_navs"]}>
                  <li>
                    <p className={`${styles["side_navs_link"]} w-70`}>
                      Great ideas get more hits with great layouts. Therefore,
                      we design.
                    </p>
                  </li>
                  <li
                    className={`${styles[("nav_item", "nav_item_btn")]}  mt-2`}
                  >
                    <Link
                      className={styles["nav_item_link"]}
                      onClick={sideToggle}
                      href="/contact-us?scroll=true"
                    >
                      Reach out
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Sidebar;
