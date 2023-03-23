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
  
];

const LinkComponent = ({ image, text, url, type }) => {
  return (
    <Row className="mb-4">
      <Col xs="9">
        <div
          className={`${styles["footer__link__row"]} d-flex align-items-center gap-4`}
        >
          <Image src={image} width={50} height={50}  alt=''/>
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

const ContainerLinksComponent = ({ data, title }) => {
  return (
    <Col md={6}>
      <h2 className={styles["footer__external__title"]}>{title}</h2>

      {data.map((link, i) => (
      <LinkComponent
          key={i}
          image={link.image}
          text={link.title}
          url={link.link}
        />
      ))}
    </Col>
  );
};

const FooterHead = ({data}) => {
  return (
    <header style={{backgroundColor: data.FooterColors.firstColor, color:  data.FooterColors.fontColor}}>
      <Container>
        <Row>
          <ContainerLinksComponent
            
            data={data?.FooterOurProducts}
            title="Our Projects"
          />

          <ContainerLinksComponent
            
            data={data?.FooterInHouseWorks}
            title="In-house Products"
          />
        </Row>
      </Container>
    </header>
  );
};

export default FooterHead;
