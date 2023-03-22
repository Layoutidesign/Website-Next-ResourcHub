/** @format */

import { Container } from "reactstrap";
import styles from './Footer.module.scss'
const FooterFooter = ({data}) => {
  return (
    <>
      {data&& <footer style={{backgroundColor: data?.FooterColors?.lastColor, color:  data?.FooterColors?.fontColor}}>
      <Container  className={styles['foot_container']}>
        <div className=" d-flex justify-content-between align-items-center flex-wrap h-100">
          <p className="fs-6 fw-lighter  m-0 d-block" dangerouslySetInnerHTML={{__html: data?.FooterContent?.copyWriter}}>
            
          </p>
          <p className="fs-6 d-md-block d-none fw-lighter m-0 d-block"  dangerouslySetInnerHTML={{__html: data?.FooterContent?.createdBy}}>
          </p>
        </div>
      </Container>
    </footer>}
    </>
   
  );
};

export default FooterFooter;
