/** @format */
import Content from "@/components/Channels/content/Content";
import Header from "@/components/Channels/header/Header";
import SEOHead from "@/components/global/SEOHead/SEOHead";
import UiUxResources from "@/components/layouts/UiUxResources";
import UiUxResourcesServices from "@/services/uiUxResources.services";
import { getSession } from "next-auth/react";
import { useState } from "react";

function News({
  footerContent,
  footerData,
  session,
  channels
}) {
  const [showSignPopup, setShowSignPopup] = useState(false);
  console.log(channels);
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
      <UiUxResources onClick={() => setShowSignPopup(false)} footerContent={footerContent} footerData={footerData} session={session} showSignPopup={showSignPopup} setShowSignPopup={setShowSignPopup} >
         <Header />
         <Content data={channels}/>
      </UiUxResources>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const session = await getSession(context)
    const channels = await UiUxResourcesServices.getChannels();
    const uiUxFooterReq = await UiUxResourcesServices.getUiUxResourcesFooter(session?.user?.accessToken);
    const FooterLinksData = await UiUxResourcesServices.getLayoutiFooter();
    return {
      props: {
        channels:channels?.data?.data?.Channels,
        footerContent: uiUxFooterReq?.data?.data,
        footerData: FooterLinksData?.data.data,
        session,
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
