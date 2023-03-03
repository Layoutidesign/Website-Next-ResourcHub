/** @format */

import { useEffect, useState } from "react";
import Link from "next/link";
import { Col, Container, Row } from "reactstrap";
import styles from "./Header.module.scss";

import {
  LayoutliLogoWhiteIcon,
  LayoutiLogoDarkIcon,
  MenuWhiteIcon,
  MenuDarkIcon,
} from "@/components/global/Svgs";

const NavLink = ({ url, text, whiteActive }) => {
  return (
    <li className={styles["nav_item"]}>
      <Link
        className={`${styles["nav_item_link"]} ${
          whiteActive ? "white__link" : ""                          
        } nav_item_link`}
        href={url}
      >
        {text}
      </Link>
    </li>
  );
};

const navLinks = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/resources",
    text: "Resources",
  },
  {
    url: "/ux-process",
    text: "UX Process",
  },
  {
    url: "/ui-book",
    text: "UI Book",
  },
  {
    url: "/academy",
    text: "Academy",
  },
  {
    url: "/articles",
    text: "Articles",
  },
];

const Header = () => {
  const [whiteActive, setWhiteActive] = useState(true);

  function sideToggle() {
    document?.querySelector(".sidebar").classList.toggle("active");
  }

  useEffect(() => {
    let offset = 0;

    let scrollFunction = (e) => {
      if (window.scrollY > offset) {
        document.querySelector(".header_layouti").classList.add("active");
      } else {
        document.querySelector(".header_layouti").classList.remove("active");
      }
      if (window.scrollY <= 0) {
        document.querySelector(".header_layouti").classList.remove("active");
      }

      if (window.scrollY > 0) {
          setWhiteActive(false);
      } else {
        setWhiteActive(true);
      }

      if (window.scrollY > 0) {
        document.querySelector(".header_layouti").classList.add("white");
      } else {
        document.querySelector(".header_layouti").classList.remove("white");
      }

      // if (window.scrollY > 200) {
      //   document.querySelector(".scroll_top").style.display = "flex";
      // } else {
      //   document.querySelector(".scroll_top").style.display = "none";
      // }
      offset = window.scrollY;
    };

    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <header className={`${styles["header_layouti"]} header_layouti`}>
      <Container className=" h-100">
        <Row className="align-items-center justify-content-between h-100">
          <Col xs="2" className="header_logo p-0">
            <a href="https://www.layouti.com/" target="_blank">
              {whiteActive ? (
                <LayoutliLogoWhiteIcon />
              ) : (
                <LayoutiLogoDarkIcon />
              )}
            </a>
          </Col>
          <Col xs={8} className="d-none d-lg-block ">
            <Row
              className={`${styles["navs"]}  align-items-center justify-content-between h-100 fs-6`}
            >
              <ul className={styles["navbar_one"]}>
                {navLinks.map((link, i) => (
                  <NavLink
                    key={i}
                    text={link.text}
                    url={link.url}
                    whiteActive={whiteActive}
                  />
                ))}
                <li className={styles[("nav_item ", "nav_item_btn")]}>
                  <Link
                    className={`${styles["nav_item_link"]} nav_item_link`}
                    href="/contact-us?scroll=true"
                  >
                    Reach out
                  </Link>
                </li>
                <li
                  className={`${
                    styles[("nav_item ", "nav_item_btn")]
                  } d-md-block d-none`}
                >
                  <button className={styles["toggle-btn"]} onClick={sideToggle}>
                    {!whiteActive ? <MenuDarkIcon /> : <MenuWhiteIcon />}
                  </button>
                </li>
              </ul>
            </Row>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
