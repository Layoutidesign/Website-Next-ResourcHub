/** @format */

import Link from "next/link";
import { Col, Container, Row, Collapse } from "reactstrap";
import classnames from "classnames";

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

import { otherLinks, mainMenuLinks, helpLinks, layoutiLinks } from "@/data/static-data";
import Image from "next/image";

const ContainerLinksComponent = ({ title, links, type }) => {
  return (
    <Row className="m-0 mb-4">
      <Col className={`side_navbar_one p-0`}>
        <h3 className="fs-5 fw-bolder">{title}</h3>
        <ul className={`footer_navs mt-4`}>
          {links?.map((link, i) => (
            <li key={i}>
              {type === "internal" ? (
                <Link className="footer_navs_link" href={link.url}>
                  {link.text}
                </Link>
              ) : (
                <a className="footer_navs_link" href={link.url} >
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
  }
];

const LinkComponent = ({ image, text, url, type }) => {
  return (
    <Row className="m-0 mb-4">
      <Col className="p-0">
        <div className={`footer__link__row d-flex align-items-center gap-4`}>
          <Image src={image} width={40} height={40} alt='sad'/>
          <h3 className="m-0">{text}</h3>
        </div>
      </Col>
      <Col className="d-flex align-items-center justify-content-end">
        {type === "internal" ? (
          <Link href={url} className="external__link">
            <TopRightArrowIcon />
          </Link>
        ) : (
          <a href={url}  className="external__link" >
            <TopRightArrowIcon />
          </a>
        )}
      </Col>
    </Row>
  );
};

const ContainerProductsComponent = ({ title, data, type }) => {
  return (
    <>
      <h3 className={`footer__external__title fs-5 mb-4 fw-bolder`}>{title}</h3>
      {data.map((link, i) => (
        <LinkComponent
          key={i}
          image={link.image}
          text={link.title}
          url={link.link}
          
        />
      ))}
    </>
  );
};



const AccordionBody = ({ links, type }) => {
  return (
    <div className="accordion-body">
      <ul className="footer_navs">
        {links?.map((link) => (
          <li key={link.url}>
            {type === "internal" ? (
              <Link className="footer_navs_link" href={link.url}>
                {link.text}
              </Link>
            ) : (
              <a className="footer_navs_link" href={link.url}>
                {link.text}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const AccordionBodyForProducts = ({ data, type }) => {
  return (
    <div className="accordion-body">
      {data?.map((link, i) => (
        <LinkComponent
          key={i}
          image={link.image}
          text={link.title}
          url={link.link}
          type={type}
        />
      ))}
    </div>
  );
};

const SidebarTest = ({data}) => {
  const [col1, setcol1] = useState(false);
  const [col2, setcol2] = useState(false);
  const [col3, setcol3] = useState(false);
  const [col4, setcol4] = useState(false);
  const [col5, setcol5] = useState(false);
  const [col6, setcol6] = useState(false);

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
  const t_col6 = () => {
    /* eslint-disable-line */
    setcol6(!col6);
    setcol1(false);
    setcol2(false);
    setcol4(false);
    setcol3(false);
    setcol5(false);
  };

  function sideToggle() {
    document.querySelector(".sidebar").classList.toggle("active");
  }

  return (
    <div className={`sidebar`}>
      <Container className="sidebar_container">
        <Row
          className={`side_header justify-content-between align-items-center `}
        >
          <Col className="p-0 mt-3">
            <Row className="align-items-center flex-nowrap gap-2 m-0">
              <Col  className="">
                <a href="https://www.layouti.com/" target="_blank">
                <Image src={data.FooterContent.logo} width={130} height={45} alt=''/>{" "}
                </a>
              </Col>
            </Row>
          </Col>
          <Col xs="2">
            <button className="toggle_close" onClick={sideToggle}>
              <ExitButtonWhiteIcon />
            </button>
          </Col>
        </Row>

        
        <Row className="m-0 gap-4 ">
          <Col className={`desc_foot p-0 mt-5 `}>
            <Row className="m-0 mb-4 mt-2">
            <Col className={`side_navbar_one p-0`}>
              <ul className={`footer_navs`}>
                {mainMenuLinks.map((link, i) => (
                  <li key={i} className={"mb-4"} >
                      <Link className="footer_navs_link fs-3 fw-bold" href={link.url} onClick={sideToggle}>
                        {link.text}
                      </Link>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
          </Col>
          <Col className={`desc_foot p-0 mt-5 col-3 mx-5`}>
            <ContainerProductsComponent
              data={data?.FooterOurProducts}
              title="Our Projects"
            />
            <ContainerProductsComponent
             data={data?.FooterInHouseWorks}
             title="In-house Products"
            />
          </Col>

          <Col className={`desc_foot p-0 mt-5 mx-5`}  >
            <ContainerLinksComponent
              links={layoutiLinks}
              title="Layouti"
            />
            <ContainerLinksComponent
              links={otherLinks}
              title="Other Links"
              type="internal"
            />
           
          </Col>

          <Col className={`desc_foot p-0 mt-5`}>
            <Row className="mb-4">
            <ContainerLinksComponent
              links={helpLinks}
              title="Help?"
              type="external"
            />
              <Col>
                <h3 className="fs-5 fw-bolder">{data.FooterContent.title}</h3>
                <ul className={`side_navs mt-4 `}>
                  <li>
                    <p className="m-0  w-70">
                    {data.FooterContent.subDescription}
                    </p>
                  </li>
                  <li className={`nav_item_btn nav_item mt-2`}>
                    {/* <a className='nav_item_link' onClick={sideToggle} href='https://365design.layouti.com/layouti-tree/' target='blank'>Reach out</a> */}
                    <a
                      className="nav_item_link"
                      onClick={sideToggle}
                      href="https://layouti.com/contact-us?scroll=true"
                      target="_blank"
                    >
                      Reach out
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          
          


          
          <Col lg={6} sm={12} className={`mobile_foot mt-4 p-0`}>
            <div className="accordion" id="accordion">
              <div className="accordion-item">
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

              <div className="accordion-item">
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
                    <h3 className="fs-md-5 fs-6 m-0">Our Projects</h3>
                  </button>
                </h2>

                <Collapse isOpen={col2} className="accordion-collapse">
                <AccordionBodyForProducts
                    data={data?.FooterOurProducts}
                  />
                </Collapse>
              </div>

              <div className="accordion-item">
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
                    <h3 className="fs-md-5 fs-6 m-0">In-house Products</h3>
                  </button>
                </h2>

                <Collapse isOpen={col3} className="accordion-collapse">
                  <AccordionBodyForProducts
                    data={data?.FooterInHouseWorks}
                  />
                </Collapse>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    // className={`${
                    //   styles[("accordion-button-footer", " accordion-button")]
                    // } fw-medium collapsed: ${!col2} `}
                    className={classnames("fw-medium", { collapsed: !col4 })}
                    type="button"
                    onClick={t_col6}
                    style={{ cursor: "pointer" }}
                  >
                    <h3 className="fs-md-5 fs-6 m-0">Layouti</h3>
                  </button>
                </h2>

                <Collapse isOpen={col6} className="accordion-collapse">
                  <AccordionBody links={layoutiLinks} type="internal" />
                </Collapse>
              </div>

              <div className="accordion-item">
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

              <div className="accordion-item">
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
                <ul className="side_navs">
                  <li>
                    <p className={`side_navs_link w-70`}>
                      Great ideas get more hits with great layouts. Therefore,
                      we design.
                    </p>
                  </li>
                  <li className={`nav_item nav_item_btn  mt-2`}>
                    <Link
                      className="nav_item_link"
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

export default SidebarTest;
