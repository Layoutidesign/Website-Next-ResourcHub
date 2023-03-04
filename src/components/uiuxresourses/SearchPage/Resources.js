/** @format */
import { useEffect, useState, useRef, useCallback  } from "react";
import Masonry from "react-masonry-css";
import { Col, Container, Row } from "reactstrap";
import InnerPageCard from "@/components/global/Cards/InnerPageCard/InnerPageCard";
import ResourcesFilter from "./ResourcesFilter";
import styles from "./InnerPage.module.scss";
import UiUxResourcesServices from '../../../services/uiUxResources.services'
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component';
import useInfiniteScroll from "@/Hooks/useInfiniteScroll";
import InnerPageCardSkelton from "@/components/global/Skelton/Cards/InnerPageCardSkelton/InnerPageCardSkelton";
import { EmptyIcon, SearchIcon } from "@/components/global/Svgs";
import DesktopSearch from "@/components/global/Search/DesktopSearch/DesktopSearch";

const Resources = ({ 
    innerPages, 
    tags, 
    total, 
    setTotal,
    showLoading, 
    setShowLoading, 
    categoryName, 
    subCategoryName 
  }) => {
  const [innerPageNum, setInnerPageNum] = useState(30);
  const [websites, setwebsites] = useState(30);
  const [filter, setFilter] = useState([]);
  const [data, setData] = useState(null);
  const [getMore, setGetMore] = useState(null);
  const [scroll, setScroll] = useState(2);

 
  const handleLoadMore = () => {
    setInnerPageNum((prevInnerNum) => prevInnerNum + 8);
  };

  useEffect(() => {
    if(filter.length == 0 )  { 
      setData(innerPages)
    } 
  }, [innerPages, filter])

  const handleLike = (id) => {
    UiUxResourcesServices.likeResource(id)
    setData(cards => cards.map(card => card.id === id?{...card, ip: !card.ip, likes: card.ip?card.likes-1:card.likes+1}:card))
  };

  function handleView (id) { 
    UiUxResourcesServices.ViewrsResource(id)
    setData(cards => cards.map(card => ( card.id === id?{...card, viwers:card.viwers+1}:card)))
  }


  useEffect(() => {
    if (filter.length == 0) {
      return ;
    } else {
      axios.get(
        `https://www.resourchub-laravel.layouti.com/api/frontend/resources/pages?${`search=${subCategoryName.split("-").join(" ")}`}${filter.map((tag, i) => `&tags[${i}]=${tag}`).join("")}`
      ).then((res) => {
        setData(res?.data?.data?.pages);
        setTotal(res.data.data?.pagination?.total)
        setShowLoading(false);
      });
    }
  }, [filter]);


  function getOtherData(){
    if(filter.length == 0 && scroll <= 3){
      setShowLoading(true);
      axios.get(
        `https://www.resourchub-laravel.layouti.com/api/frontend/resources/pages?search=${subCategoryName}&page=${scroll}`
      ).then((res) => {
        setData((current) => [...current,...res?.data?.data?.pages]);
        setShowLoading(false);
      });
    }else if(scroll <= 3){
      setShowLoading(true);
      axios.get(
        `$https://www.resourchub-laravel.layouti.com/api/frontend/resources/pages?${`search=${subCategoryName}&page=${scroll}`
        }${filter.map((tag, i) => `&tags[${i}]=${tag}`).join("")}`
      ).then((res) => {
        setShowLoading(false);
        setData((current) => [...current,...res?.data?.data?.pages]);
      });
    }
  }

  const callback = () => {
    if(websites < 90){
      if ((total - websites) > 30 ){
          setInnerPageNum(websites + 30);
          setwebsites( websites + 30);
          setScroll((scroll+1))
          getOtherData()
      }
      else{
        setInnerPageNum(websites + (total - websites));
        setwebsites( websites + (total - websites));
        setScroll((scroll+1))
        getOtherData()
      }
    }
  };

  const [lastElementRef] = useInfiniteScroll(
    callback
  );


  return (
    <div className={styles["resources"]}>
      <Container className="">
        <DesktopSearch />
        <ResourcesFilter tags={tags} setFilter={setFilter}/>
        <Masonry
          breakpointCols={{ default: 4, 768: 1 }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data && data.length > 0 
            &&data?.slice(0, websites)?.map((innerPage, i) => {
                if (innerPageNum === i +1) {
                  return (
                    <InnerPageCard
                      setData={setData}
                      innerPage={innerPage}
                      key={innerPage?.id || i}
                      reference={lastElementRef}
                      handleLike={handleLike}
                      handleView={handleView}
                      categoryName={categoryName}

                    />
                  );
                } else {
                  return (
                    <InnerPageCard
                      setData={setData}
                      innerPage={innerPage}
                      key={innerPage?.id || i}
                      index={i}
                      handleLike={handleLike}
                      handleView={handleView}
                      categoryName={categoryName}

                    />
                  );
                }
              })
            }
             {showLoading &&
            Array.from({ length: 25 }).map((_, i) => (
              <InnerPageCardSkelton key={i} />
            ))}
        </Masonry>
        {data&&data.length > 0 && total > websites ? (
          <div className={styles["loadMore"]}>
            {/* <button type="button" className="loadbtn" onClick={GetMoreData}>
              Load More
            </button> */}
          </div>
        ) :data&&data.length > 0 && total <= websites ? (
          <div className={styles["loadMore"]}>
            <div style={{ color: "#fff" }}>
              You’ve reached the end of the list
            </div>
          </div>
        ):null}

        {data&&data.length == 0 && <div className={styles["loadMore"]}>
            <div style={{ color: "#fff" }}>
              <EmptyIcon />
            </div>
          </div>}
      </Container>
    </div>
  );
};

export default Resources;
