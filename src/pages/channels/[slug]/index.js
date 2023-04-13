/** @format */
import Content from "@/components/Channels/content/Content";
import ChannelHeader from "@/components/Channels/header/ChannelHeader";
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
}) {
  const [showSignPopup, setShowSignPopup] = useState(false);
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
        <ChannelHeader />
      </UiUxResources>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const session = await getSession(context)
    const slug = context.params.slug
    const uiUxFooterReq = await UiUxResourcesServices.getUiUxResourcesFooter(session?.user?.accessToken);
    const FooterLinksData = await UiUxResourcesServices.getLayoutiFooter();
    return {
      props: {
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
