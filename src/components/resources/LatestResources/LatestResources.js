/** @format */

import Link from "next/link";
import Masonry from "react-masonry-css";
import { Container } from "reactstrap";

import InnerPageCard from "@/components/global/Cards/InnerPageCard/InnerPageCard";

import styles from "./LatestResources.module.scss";

const LatestResources = ({ resources }) => {
  return (
    <section className={styles["latestResources"]}>
      <Container>
        <h3>Latest Resources for Designer</h3>
        <Masonry
          breakpointCols={{ default: 4, 768: 1 }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {resources?.map((innerPage, i) => (
            <InnerPageCard innerPage={innerPage} key={innerPage?.id || i} />
          ))}
        </Masonry>
        <Link className={styles["link"]} href="/resources/User Interface (UI)">
          View Additional Resources
        </Link>
      </Container>
    </section>
  );
};

export default LatestResources;
