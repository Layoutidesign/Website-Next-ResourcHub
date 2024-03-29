/** @format */
import Header from "@/components/Channels/header/Header";
import ContentHeader from "@/components/News/Header/ContentHeader";
import NewsTabs from "@/components/News/Tabs/NewsTabs";
import SocialPostsCard from "@/components/Posts/SocialPostsCard/SocialPostsCard";
import Tabs from "@/components/Posts/Tabs/Tabs";
import SEOHead from "@/components/global/SEOHead/SEOHead";
import UiUxResources from "@/components/layouts/UiUxResources";
import UiUxResourcesServices from "@/services/uiUxResources.services";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Content from "@/components/Channels/content/Content";
import axios from "axios";
import { LoadMoreBtn } from "@/components/Posts/styles";
function News({
  footerContent,
  footerData,
  session,
  headerContent,
  Designers,
  Designs,
  Categories,
  name
}) {
  const [showSignPopup, setShowSignPopup] = useState(false);
  const [type, setType] = useState(1);
  const [designsItems, setDesignsItems] = useState([])
  const [catName, setCatName] = useState(name?name:"")
  const [page, setPage] = useState(1)
  const [next, setNext] = useState(false)
  const [first, setFirst] = useState(true)

  useEffect(() => {
    setDesignsItems(Designs)
    Designs.length >= 25&&setNext(true)
  }, [Designs])

  let getDesigns = (name, page) => {
    axios.get(`https://www.resourchub-laravel.layouti.com/api/frontend/socialPost/designs?category=${name}&page=${page}`)
    .then((res) => {
      setDesignsItems(res.data.data.Designs)
      setPage(page => page+1)      

    })
  }


  useEffect(() => {
    !first?getDesigns(catName, 1):setFirst(false)
  }, [catName])
  
  return (
    <>
      <SEOHead
        // title={seoData?.titleEn}
        // description={seoData?.descriptionEn}
        // ogImgUrl={seoData?.facebookImage}
        // keywords={seoData?.keywordsEn}
        // ogTitle={seoData?.facebookTitleEn}
        // ogDescription={seoData?.facebookDescriptionEn}
        favicon={footerContent?.navbar?.favIcon}
      />
      <UiUxResources footer={true} onClick={() => setShowSignPopup(false)} footerContent={footerContent} footerData={footerData} session={session} showSignPopup={showSignPopup} setShowSignPopup={setShowSignPopup} >
        <Header 
          title={headerContent.title}
          desc={headerContent.description}
        /> 
         <Tabs type={type} setType={setType} data={Categories} setCatName={setCatName} catName={catName}/> 

         {type == 1&&<Container className="mt-5 mb-5">
          <Row>
            {designsItems.length !== 0? designsItems.map((item, i) => <Col md={4}>
              <SocialPostsCard key={i} data={item}/>
            </Col>): <p className="text-white text-center mt-5">No Posts Found In This Category!</p>}
          </Row>
          <Row className="mt-5">
            {next?<Col className=" w-100 d-flex justify-content-center mt-5 mb-5">
              <LoadMoreBtn onClick={() => getDesigns(catName, )}>
                Load More
              </LoadMoreBtn>
            </Col>: <p className="text-white text-center ">You Have Reached The End Of The List!</p>}
          </Row>
         </Container>}


         {type == 2&&<Content data={Designers} type="designers"/>}
      </UiUxResources>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const session = await getSession(context)
    const name = context?.query?.name
    const Categories = await UiUxResourcesServices.getSocialCategories();
    const Designers = await UiUxResourcesServices.getSocialDesighners();
    const Designs = await UiUxResourcesServices.getSocialDesigns(name !== undefined?name.split("-").join(" "):"");
    const headerContent = await UiUxResourcesServices.getSocialHeader();
    const uiUxFooterReq = await UiUxResourcesServices.getUiUxResourcesFooter(session?.user?.accessToken);
    const FooterLinksData = await UiUxResourcesServices.getLayoutiFooter();
    return {
      props: {
        footerContent: uiUxFooterReq?.data?.data,
        footerData: FooterLinksData?.data.data,
        session,
        headerContent: headerContent?.data?.data,
        Designers: Designers?.data?.data?.Designers,
        Designs: Designs?.data?.data?.Designs,
        Categories:Categories?.data?.data,
        name:name !== undefined&&name.split("-").join(" ")
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        data: null,
      },
    };
  }
}

export default News;
