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
import DesignersHeader from "@/components/Posts/DesignersHeader/DesignersHeader";
import Bunners from "@/components/Posts/Bunners/Bunners";
function News({
  footerContent,
  footerData,
  session,
  Design,
  OtherPosts
}) {
  const [showSignPopup, setShowSignPopup] = useState(false);

  

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
        <DesignersHeader  designer={Design.Designer} deisgn={Design}/>
        {/* <Bunners data={Designer?.Profiles}/> */}
        <Container style={{marginBottom: "100px", marginTop: "40px"}}>
          <Row >
              {Design?.Images.map((item, i) => <Col md={4}>
                <SocialPostsCard key={i} data={item}  nodir={true}/>
              </Col>)}  
            </Row>
        </Container>
      </UiUxResources>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const session = await getSession(context)
    const name = context.params.name
    const Design = await UiUxResourcesServices.getDesignData(name);
    const uiUxFooterReq = await UiUxResourcesServices.getUiUxResourcesFooter(session?.user?.accessToken);
    const FooterLinksData = await UiUxResourcesServices.getLayoutiFooter();
    return {
      props: {
        footerContent: uiUxFooterReq?.data?.data,
        footerData: FooterLinksData?.data.data,
        session,
        Design: Design?.data?.data?.Design,
        OtherPosts: Design?.data?.data?.OtherPosts
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
