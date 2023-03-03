/** @format */
import Link from "next/link";
import Image from "next/image";

import { Container, Col, Row } from "reactstrap";
import styles from "./Footer.module.scss";

import {
  TopRightArrowIcon,
  AcademyLogoIcon,
  UiAvatarLogoIcon,
  Ui365DesignIcon,
  EToyAppIcon,
  ScanSmileIcon,
} from "@/components/global/Svgs";

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
    <Row className="mb-4">
      <Col xs="9">
        <div
          className={`${styles["footer__link__row"]} d-flex align-items-center gap-4`}
        >
          <Image />
          <h3 className="m-0">{text}</h3>
        </div>
      </Col>
      <Col xs="3" className="d-flex align-items-center justify-content-end">
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

const ContainerLinksComponent = ({ title, links, type }) => {
  return (
    <Col md={6}>
      <h2 className={styles["footer__external__title"]}>{title}</h2>
      {links.map((link, i) => (
        <LinkComponent
          key={i}
          Image={link.Image}
          text={link.text}
          url={link.url}
          type={type}
        />
      ))}
    </Col>
  );
};

const FooterHead = () => {
  return (
    <header>
      <Container>
        <Row>
          <ContainerLinksComponent
            title="Our Products"
            links={internalLinks}
            type="internal"
          />

          <ContainerLinksComponent
            title="In-house Works"
            links={externalLinks}
            type="external"
          />
        </Row>
      </Container>
    </header>
  );
};

export default FooterHead;
