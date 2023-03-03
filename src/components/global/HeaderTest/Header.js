/** @format */

import { useEffect, useState } from "react";
import Link from "next/link";
import { Col, Container, Row } from "reactstrap";

import {
  LayoutiLogoDarkIcon,
  LayoutliLogoWhiteIcon,
  MenuDarkIcon,
  MenuWhiteIcon,
} from "../Svgs";
import { useRouter } from "next/router";
import { navLinks } from "@/data/static-data";

const NavLink = ({ url, text, whiteActive }) => {
  const router = useRouter();

  return (
    <li className={"nav_item"}>
      <Link
        className={`${whiteActive ? "white__link" : ""} nav_item_link ${
          router.pathname === url ? "active" : ""
        }`}
        href={url}
      >
        {text}
      </Link>
    </li>
  );
};

const HeaderTest = () => {
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
    <header className={`header_layouti`}>
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
              className={`navs  align-items-center justify-content-between h-100 fs-6`}
            >
              <ul className="navbar_one">
                {navLinks.map((link, i) => (
                  <NavLink
                    key={i}
                    text={link.text}
                    url={link.url}
                    whiteActive={whiteActive}
                  />
                ))}
                <li className="nav_item nav_item_btn">
                  <Link
                    className="nav_item_link"
                    href="/contact-us?scroll=true"
                  >
                    Reach out
                  </Link>
                </li>
                <li className={`nav_item nav_item_btn d-md-block d-none`}>
                  <button className="toggle-btn" onClick={sideToggle}>
                    {!whiteActive ? <MenuDarkIcon /> : <MenuWhiteIcon />}
                  </button>
                </li>
              </ul>
            </Row>
          </Col>
          <Col className="toggle_mob p-0">
            <button className="toggle-btn" onClick={sideToggle}>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6V7.66667H23V6H3ZM3 12.6667V14.3333H23V12.6667H3ZM3 19.3333V21H23V19.3333H3Z"
                  fill="#ffffff"
                />
              </svg>
            </button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeaderTest;
