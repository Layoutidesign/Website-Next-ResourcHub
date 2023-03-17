/** @format */

import { useEffect, useState } from "react";
import Link from "next/link";
import { Col, Container, Row } from "reactstrap";

import {
  LayoutiLogoDarkIcon,
  LayoutliLogoWhiteIcon,
  MenuDarkIcon,
  MenuWhiteIcon,
  NewLogoDark,
  NewLogoWhite,
} from "../Svgs";
import { useRouter } from "next/router";
import { navLinks } from "@/data/static-data";
import styles from "./Header.module.scss";
import MobileSearch from "../Search/MobileSearch/MobileSearch";


const NavLink = ({ url, text, whiteActive }) => {
  const router = useRouter();
  return (
    <li className={"nav_item"}>
      <Link
        className={`${whiteActive ? "white__link" : ""} ${router.asPath.split('/')[1] === url.split('/')[1]? "active": ""} nav_item_link`}
        href={url}
      >
        {text}
      </Link>
    </li>
  );
};

const HeaderTest = () => {
  const [whiteActive, setWhiteActive] = useState(true);
  const [search, setSearch] = useState(false)

  function sideToggle() {
    document?.querySelector(".sidebar").classList.toggle("active");
  }

  useEffect(() => {
    let offset = 0;

    let scrollFunction = (e) => {
      if (window.scrollY > offset) {
        document.querySelector(".header_layouti").classList.add("active");
        setSearch(false)
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
      offset = window.scrollY;
    };
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <>
    <header className={`header_layouti`}>
      <Container className=" h-100 position-relative p-0">
      
        <Row className="align-items-center justify-content-between h-100">
          <Col xs="3" className="header_logo">
            <Link href="/resources" >
            <Row className="align-items-center">
              <Col xs={2}>
                
                {whiteActive ? (
                  <NewLogoDark />
                ) : (
                  <NewLogoWhite />
                )}
                
               
              </Col>
              <Col>
                  <h1 className={`fs-5 text-${whiteActive?"white":"black"} m-0 p-0 mx-4 d-md-block d-none`}>ResourcHub</h1>
              </Col>
            </Row>
              </Link>
          </Col>
          <Col xs={8} className="d-none d-lg-block">
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
                <li className="nav_item nav_item_btn fw-bold">
                  <Link
                    className="nav_item_link fw-bold"
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
                  fill={whiteActive?"#ffffff":"#000000"}
                />
              </svg>
            </button>
            <button className='toggle-btn'  onClick={() => setSearch(!search)}>
                {!search?<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.6115 2C6.30323 2 2 6.20819 2 11.3993C2 16.5903 6.30323 20.7985 11.6115 20.7985C13.8819 20.7985 15.9684 20.0287 17.613 18.7415L20.7371 21.7886L20.8202 21.8586C21.1102 22.0685 21.5214 22.0446 21.7839 21.7873C22.0726 21.5043 22.072 21.0459 21.7825 20.7636L18.6952 17.7523C20.2649 16.0794 21.2231 13.8487 21.2231 11.3993C21.2231 6.20819 16.9198 2 11.6115 2ZM11.6115 3.44774C16.1022 3.44774 19.7426 7.00776 19.7426 11.3993C19.7426 15.7908 16.1022 19.3508 11.6115 19.3508C7.12086 19.3508 3.48044 15.7908 3.48044 11.3993C3.48044 7.00776 7.12086 3.44774 11.6115 3.44774Z" fill={whiteActive? "#ffffff": "#000000"}/>
                </svg>: <svg width="15" height="15" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.3609 0.283215C1.068 -0.00967818 0.593129 -0.00967818 0.300236 0.283215C0.00734299 0.576108 0.00734299 1.05098 0.300236 1.34388L4.01255 5.05619L0.300236 8.7685C0.00734299 9.06139 0.00734299 9.53627 0.300236 9.82916C0.593129 10.1221 1.068 10.1221 1.3609 9.82916L5.07321 6.11685L8.78552 9.82916C9.07841 10.122 9.55328 10.122 9.84618 9.82916C10.1391 9.53626 10.1391 9.06139 9.84618 8.7685L6.13387 5.05619L9.84618 1.34388C10.1391 1.05098 10.1391 0.57611 9.84618 0.283217C9.55328 -0.0096764 9.07841 -0.00967612 8.78552 0.283217L5.07321 3.99553L1.3609 0.283215Z" fill={whiteActive? "#ffffff": "#000000"}/>
                      </svg>

                }
            </button>
          </Col>
        </Row>
      </Container>
    </header>
    {search&&<MobileSearch search={search} setSearch={setSearch}/>}
    </>
  );
};

export default HeaderTest;
