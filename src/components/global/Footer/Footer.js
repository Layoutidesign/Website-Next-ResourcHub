/** @format */

import styles from "./Footer.module.scss";
import FooterHead from "./FooterHead";
import FooterFooter from "./FooterFooter";
import FooterContainer from "./FooterContainer";

const Footer = ({data}) => {
  return (
    <footer className={styles["footer"]}>
      {data&&<FooterHead data={data}/>}
      {data&&<FooterContainer data={data}/>}
      {data&&<FooterFooter data={data}/>}
    </footer>
  );
};

export default Footer;
