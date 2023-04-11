/** @format */

import Link from "next/link";
import Masonry from "react-masonry-css";
import { Container } from "reactstrap";

import InnerPageCard from "@/components/global/Cards/InnerPageCard/InnerPageCard";

import styles from "./LatestResources.module.scss";
import UiUxResourcesServices from "@/services/uiUxResources.services";
import { useState } from "react";
import { toast } from "react-toastify";

const LatestResources = ({ resources,session, showSignPopup, setShowSignPopup }) => {
  const [data, setData] = useState(resources) 
  
  const handleLike = (id) => {
    if (!session) {
      setShowSignPopup(true)
      return;
    }
    UiUxResourcesServices.likeResource({id, token: session.user.accessToken})
    setData(cards => cards.map(card => card.id === id?{...card, ip: !card.ip, likes: card.ip?card.likes-1:card.likes+1}:card))
    
  };

  function handleView (id) { 
    UiUxResourcesServices.ViewrsResource(id)
    setData(cards => cards.map(card => ( card.id === id?{...card, viwers:card.viwers+1}:card)))
  }


  return (
    <section className={styles["latestResources"]}>
      <Container>
        <h3>Latest Resources for Designer</h3>
        <Masonry
          breakpointCols={{ default: 4, 768: 1 }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data?.map((innerPage, i) => (
            <InnerPageCard innerPage={innerPage} key={innerPage?.id || i} handleLike={handleLike} handleView={handleView}/>
          ))}
        </Masonry>
        <Link className={styles["link"]} href="/resources/tools">
          View Additional Resources
        </Link>
      </Container>
    </section>
  );
};

export default LatestResources;
