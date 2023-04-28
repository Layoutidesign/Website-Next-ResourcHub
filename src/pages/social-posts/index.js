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
import { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Content from "@/components/Channels/content/Content";
function News({
  footerContent,
  footerData,
  session,
  headerContent,
  Designers,
  Designs,
  Categories
}) {
  const [showSignPopup, setShowSignPopup] = useState(false);
  const [type, setType] = useState(1);
  return (
    <>
      {/* <SEOHead
        title={seoData?.titleEn}
        description={seoData?.descriptionEn}
        ogImgUrl={seoData?.facebookImage}
        keywords={seoData?.keywordsEn}
        ogTitle={seoData?.facebookTitleEn}
        ogDescription={seoData?.facebookDescriptionEn}
        favicon={footerContent?.navbar?.favIcon}
      /> */}
      <UiUxResources onClick={() => setShowSignPopup(false)} footerContent={footerContent} footerData={footerData} session={session} showSignPopup={showSignPopup} setShowSignPopup={setShowSignPopup} >
        <Header 
          title={headerContent.title}
          desc={headerContent.description}
        /> 
         <Tabs type={type} setType={setType} data={Categories}/> 

         {type == 1&&<Container className="mt-5 mb-5">
          <Row>
            {Designs.map((item, i) => <Col md={4}>
              <SocialPostsCard key={i} data={item}/>
            </Col>)}
          </Row>
         </Container>}
         {type == 2&&<Content data={Designers}/>}
      </UiUxResources>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const session = await getSession(context)
    const Categories = await UiUxResourcesServices.getSocialCategories();
    const Designers = await UiUxResourcesServices.getSocialDesighners();
    const  Designs = await UiUxResourcesServices.getSocialDesigns();
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
        Categories:Categories?.data?.data
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
