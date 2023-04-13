/** @format */

import { useEffect, useState } from "react";
import Link from "next/link";
import { Col, Container, Row } from "reactstrap";

import {
  MenuDarkIcon,
  MenuWhiteIcon,
  NewLogoLight,
  NewLogoDark
} from "../Svgs";
import { useRouter } from "next/router";
import { navLinks } from "@/data/static-data";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"
import axios from "axios";
import User from "../User/User";
import { useSelector } from "react-redux";
const NavLink = ({ url, text, whiteActive }) => {
  const router = useRouter();
  return (
    <li className={"nav_item"}>
      <Link
        className={`${whiteActive ? "white__link" : ""} ${router.asPath.split('/')[1] === url.split('/')[1]? "active": ""} nav_item_link `}
        href={url}
      >
        {text}
      </Link>
    </li>
  );
};

const HeaderTest = ({data, color, session}) => {
  const [whiteActive, setWhiteActive] = useState(true);
  const router = useRouter()
  const [active, setActive] = useState(false)
  const favCount = useSelector(state => state.fav.count)
 
  
  
  
  
  function sideToggle() {
    document?.querySelector(".sidebar").classList.toggle("active");
  }



  // useEffect(() => {
  //   if(session) {
  //     axios.post('https://www.resourchub-laravel.layouti.com/api/frontend/login', session.user)
  //     .then(res => {
  //     })
  //   }
  // }, [session])






  useEffect(() => {
    if(router.asPath.split('/')[1] === 'articles') {
      setWhiteActive(false)
      document.querySelector(".header_layouti").classList.add("white");
    }
  }, [router])

  useEffect(() => {
    let offset = 0;
    let scrollFunction = (e) => {
      setActive(false)
      if (window.scrollY > offset) {
        document.querySelector(".header_layouti").classList.add("active");
        document.querySelector("#tabs_fixed")?.classList.add("active");
      } else {
        document.querySelector(".header_layouti").classList.remove("active");
        document.querySelector("#tabs_fixed")?.classList.remove("active");
      }

      if (document.querySelector("#btn_offest")?.offsetTop !== 0) {
        if (window.scrollY < offset && window.scrollY > document.querySelector("#btn_offest")?.offsetTop) {
          document.querySelector("#tabs_fixed")?.classList.remove("active");
          document.querySelector("#tabs_fixed").style.display = "flex";
        }else if (window.scrollY < document.querySelector("#btn_offest")?.offsetTop){
          document.querySelector("#tabs_fixed").style.display = "none";
        } else {
          document.querySelector("#tabs_fixed")?.classList.add("active");
        }
        if ( window.scrollY > document.querySelector("#btn_offest")?.offsetTop) {
          document.querySelector("#tabs_fixed").style.display = "flex";
        }else if (window.scrollY < document.querySelector("#btn_offest")?.offsetTop){
          document.querySelector("#tabs_fixed").style.display = "none";
        }
      }
      if (document.querySelector("#btnn_offest")?.offsetTop !== 0) {
        if (window.scrollY < offset && window.scrollY > document.querySelector("#btnn_offest")?.offsetTop) {
          document.querySelector("#tabs_fixed")?.classList.remove("active");
          document.querySelector("#tabs_fixed").style.display = "flex";
        }else if (window.scrollY < document.querySelector("#btnn_offest")?.offsetTop){
          document.querySelector("#tabs_fixed").style.display = "none";
        } else {
          document.querySelector("#tabs_fixed")?.classList.add("active");
        }
        if ( window.scrollY > document.querySelector("#btnn_offest")?.offsetTop) {
          document.querySelector("#tabs_fixed").style.display = "flex";
        }else if (window.scrollY < document.querySelector("#btnn_offest")?.offsetTop){
          document.querySelector("#tabs_fixed").style.display = "none";
        }
      }


      if (window.scrollY <= 0) {
        document.querySelector(".header_layouti").classList.remove("active");
        document.querySelector("#tabs_fixed")?.classList.add("active");

      }

      if (window.scrollY > 0) {
        setWhiteActive(false);
      } else {
        if(router.asPath.split('/')[1] !== 'articles'){
          setWhiteActive(true);
        }
      }

      if (window.scrollY > 0) {
        document.querySelector(".header_layouti").classList.add("white");
      } else {
        if(router.asPath.split('/')[1] !== 'articles'){
          document.querySelector(".header_layouti").classList.remove("white");
        }
      }
      offset = window.scrollY;
    };

    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <header className={`header_layouti`} style={{borderBottomColor: color}}>
      <Container className=" h-100">
        <Row className="align-items-center justify-content-between h-100">
          <Col md="3" xs={8} className="header_logo p-0">
            <Link href="/resources" >
            <Row className="align-items-center gap-md-3">
              <Col md="1" xs={2}>
                {whiteActive ? (
                  <Image src={data?.lightImage} width={45} height={45} alt="aasdf"/>
                ) : (
                  <Image src={data?.darkImage} width={45} height={45} alt="sad"/>

                )}
               
              </Col>
              <Col>
                  <h1 className={`fs-5 text-${whiteActive?"white":"black"} m-0 p-0 mx-4`}>{data?.title}</h1>
              </Col>
            </Row>
              </Link>
          </Col>
          <Col xs={7} className="d-none d-lg-block ">
            <Row
              className={`navs  align-items-center justify-content-between h-100 fs-7`}
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
                  href="https://layouti.com/contact-us?scroll=true"
                  target="_blank"
                >
                  Reach out
                </Link>
              </li>
                <li className="nav_item nav_item_btn">
                    <User whiteActive={whiteActive} session={session} signIn={signIn} signOut={signOut} active={active} setActive={setActive} count={favCount}/>
                </li>
                  
                <li className={`nav_item nav_item_btn d-md-block d-none`}>
                  <button className="toggle-btn" onClick={sideToggle}>
                    {!whiteActive ? <MenuDarkIcon /> : <MenuWhiteIcon />}
                  </button>
                </li>
              </ul>
            </Row>
          </Col>
          <Col className="toggle_mob p-0 ">
            <User whiteActive={whiteActive} session={session} signIn={signIn} signOut={signOut} active={active} setActive={setActive} count={favCount}/>
            <button className="toggle-btn" onClick={sideToggle}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6V7.66667H23V6H3ZM3 12.6667V14.3333H23V12.6667H3ZM3 19.3333V21H23V19.3333H3Z"
                  fill={whiteActive? "#ffffff": "#000000"}
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
