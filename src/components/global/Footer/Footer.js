/** @format */

import styles from "./Footer.module.scss";
import FooterHead from "./FooterHead";
import FooterFooter from "./FooterFooter";
import FooterContainer from "./FooterContainer";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <FooterHead />
      <FooterContainer />
      <FooterFooter />
    </footer>
  );
};

export default Footer;
