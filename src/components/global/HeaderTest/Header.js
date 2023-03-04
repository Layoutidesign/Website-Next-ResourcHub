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
        className={`${whiteActive ? "white__link" : ""} nav_item_link ${
          "active"
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
            <Row className="align-items-center">
              <Col xs={2}>
                <Link href="/resources" >
                {whiteActive ? (
                  <NewLogoDark />
                ) : (
                  <NewLogoWhite />
                )}
                
                </Link>
              </Col>
              <Col>
                  <h1 className={`fs-4 text-${whiteActive?"white":"black"} m-0 p-0 mx-4 d-md-block d-none`}>ResourcHub</h1>
              </Col>
            </Row>
          </Col>
          <Col xs={8} className="d-none d-lg-block">
            <Row
              className={`navs  align-items-center justify-content-between h-100 fs-6`}
            >
              <ul className="navbar_one">
              <li className={styles["nav_item"]}>
                  <a
                    className={`${
                      styles["linkWithIcon"]
                    } nav_item_link `}
                    href="https://dribbble.com/nazzaly"
                    target="_blank"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.74476 2.41956C3.48103 3.69303 1.84533 5.95116 1.41846 8.61318L4.14284 8.86241C6.16865 9.04473 8.15869 8.70342 9.94909 7.92342C9.47668 7.14819 8.95249 6.40245 8.37865 5.69122L5.74476 2.41956ZM5.57916 1.02779C2.27367 2.65961 0 6.0643 0 10C0 15.5229 4.47717 20.0001 10 20.0001C15.5229 20.0001 20.0001 15.5229 20.0001 10C20.0001 4.47717 15.5229 0 10 0C8.45409 0 6.99008 0.350805 5.68326 0.977153C5.64756 0.990734 5.61272 1.0076 5.57916 1.02779ZM6.96762 1.85205L9.39696 4.86963C10.0294 5.65354 10.6051 6.47683 11.1215 7.33351C12.8387 6.34697 14.3126 4.92853 15.3721 3.1669C13.8935 2.00286 12.0279 1.30842 10 1.30842C8.93346 1.30842 7.91175 1.50053 6.96762 1.85205ZM10.5975 9.06751C8.5772 9.97286 6.32194 10.3723 4.02551 10.1656L1.30881 9.91703C1.30855 9.94467 1.30842 9.97234 1.30842 10C1.30842 12.3226 2.2194 14.4324 3.70353 15.9916C5.47209 13.2304 8.17614 11.2735 11.2454 10.416C11.0457 9.95884 10.8296 9.50908 10.5975 9.06751ZM12.5438 10.1231C12.3065 9.56281 12.0462 9.01258 11.7635 8.47378C13.5999 7.42083 15.1864 5.92323 16.3534 4.06876C17.8039 5.62184 18.6917 7.70727 18.6917 10C18.6917 10.0777 18.6907 10.1551 18.6886 10.2323L15.9757 9.98412L15.9747 9.98404C14.8121 9.87936 13.6601 9.93006 12.5438 10.1231ZM11.7343 11.6388C8.84551 12.4087 6.30442 14.2563 4.68978 16.8814C6.1584 18.0164 8.00036 18.6917 10 18.6917C11.2098 18.6917 12.3618 18.4445 13.4084 17.9979L12.4017 13.8462C12.2194 13.0968 11.9965 12.36 11.7343 11.6388ZM14.6034 17.3739L13.673 13.5371C13.4944 12.8026 13.2791 12.0795 13.028 11.3702C13.9515 11.2317 14.9002 11.201 15.857 11.2871L15.8574 11.2872L18.5567 11.5341C18.1186 13.9944 16.6454 16.0965 14.6034 17.3739Z"
                        fill={whiteActive? "#fff":  "#000"}
                      />
                    </svg>  
                    Dribble
                  </a>
                </li>
                <li className={styles["nav_item"]}>
                  <a
                    className={`${
                      styles["linkWithIcon"]
                    } nav_item_link linkWithIcon`}
                    href="https://www.instagram.com/layoutidesign/"
                    target="_blank"
                  >
                        <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.05263 0C2.71915 0 0 2.71915 0 6.05263V13.9474C0 17.2804 2.71906 20 6.05263 20H13.9474C17.2805 20 20 17.2805 20 13.9474V6.05263C20 2.71906 17.2804 0 13.9474 0H6.05263ZM6.05263 1.57895H13.9474C16.427 1.57895 18.4211 3.57252 18.4211 6.05263V13.9474C18.4211 16.4269 16.4269 18.4211 13.9474 18.4211H6.05263C3.57252 18.4211 1.57895 16.427 1.57895 13.9474V6.05263C1.57895 3.57243 3.57243 1.57895 6.05263 1.57895ZM15.2632 3.68421C14.6816 3.68421 14.2105 4.15526 14.2105 4.73684C14.2105 5.31842 14.6816 5.78947 15.2632 5.78947C15.8447 5.78947 16.3158 5.31842 16.3158 4.73684C16.3158 4.15526 15.8447 3.68421 15.2632 3.68421ZM10 4.73684C7.10273 4.73684 4.73684 7.10273 4.73684 10C4.73684 12.8973 7.10273 15.2632 10 15.2632C12.8973 15.2632 15.2632 12.8973 15.2632 10C15.2632 7.10273 12.8973 4.73684 10 4.73684ZM10 6.31579C12.0438 6.31579 13.6842 7.95622 13.6842 10C13.6842 12.0438 12.0438 13.6842 10 13.6842C7.95622 13.6842 6.31579 12.0438 6.31579 10C6.31579 7.95622 7.95622 6.31579 10 6.31579Z"
                          fill={whiteActive? "#fff":  "#000"}
                        />
                      </svg>
                    Instagram
                  </a>
                </li>
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
