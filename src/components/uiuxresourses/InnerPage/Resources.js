/** @format */
import { useEffect, useState, useRef, useCallback  } from "react";
import Masonry from "react-masonry-css";
import { Container } from "reactstrap";
import InnerPageCard from "@/components/global/Cards/InnerPageCard/InnerPageCard";
import ResourcesFilter from "./ResourcesFilter";
import styles from "./InnerPage.module.scss";
import UiUxResourcesServices from '../../../services/uiUxResources.services'
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component';
const Resources = ({ innerPages, tags }) => {
  const [innerPageNum, setInnerPageNum] = useState(8);
  const [filter, setFilter] = useState([])
  const [data, setData] = useState([])

  const handleLoadMore = () => {
    setInnerPageNum((prevInnerNum) => prevInnerNum + 8);
  };

  useEffect(() => {
    if(filter.length == 0 )  { 
      setData(innerPages)
    }
  }, [filter])

  const handleLike = (id) => {
    UiUxResourcesServices.likeResource(id)
    setData(cards => cards.map(card => card.id === id?{...card, ip: !card.ip, likes: card.ip?card.likes-1:card.likes+1}:card))
  };

  function handleView (id) { 
    UiUxResourcesServices.ViewrsResource(id)
    setData(cards => cards.map(card => ({...card, viwers:card.viwers+1})))
  }

  return (
    <div className={styles["resources"]}>
      <Container className="">
        <ResourcesFilter tags={tags} setFilter={setFilter}/>
        <Masonry
          breakpointCols={{ default: 4, 768: 1 }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data?.slice(0, innerPageNum)?.map((innerPage, i) => {
              return <InnerPageCard handleLike={handleLike}  handleView={handleView} innerPage={innerPage} key={innerPage?.id || i} />
          }
          )}
        </Masonry>
          {innerPageNum < data?.length && (
            <div className={styles["loadMore"]}>
              <button type="button" className="loadbtn" onClick={handleLoadMore}>
                Load More
              </button>
            </div>
          )}
      </Container>
    </div>
  );
};

export default Resources;
