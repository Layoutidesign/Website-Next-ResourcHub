/** @format */
import SEOHead from "@/components/global/SEOHead/SEOHead";
import UiUxResources from "@/components/layouts/UiUxResources";
import Categories from "@/components/resources/Categories/Categories";
import LatestResources from "@/components/resources/LatestResources/LatestResources";
import UiUxResourcesServices from "@/services/uiUxResources.services";
import FirstContentSectionHome from "@/components/resources/FirstContentSectionHome/FirstContentSectionHome";
import { getSession } from "next-auth/react";
import { useState } from "react";
function Resources({
  pages,
  categories,
  headerContent,
  footerContent,
  seoData,
  footerData,
  session
}) {
  const [showSignPopup, setShowSignPopup] = useState(false);
  
  return (
    <>
      <SEOHead
        title={seoData?.titleEn}
        description={seoData?.descriptionEn}
        ogImgUrl={seoData?.facebookImage}
        keywords={seoData?.keywordsEn}
        ogTitle={seoData?.facebookTitleEn}
        ogDescription={seoData?.facebookDescriptionEn}
        favicon={footerContent?.navbar?.favIcon}
      />
        <UiUxResources onClick={() => setShowSignPopup(false)} footerContent={footerContent} footerData={footerData} session={session} showSignPopup={showSignPopup} setShowSignPopup={setShowSignPopup} >
        <FirstContentSectionHome
          title={headerContent?.title}
          description={headerContent?.description}
          image={headerContent?.image}
          imageForMobile={headerContent?.imageMobile}
          subTitle={headerContent?.subTitle}
          subDescription={headerContent?.subDescription}
        />
        <Categories categories={categories ? categories : []} />
        <LatestResources resources={pages || []} session={session} showSignPopup={showSignPopup} setShowSignPopup={setShowSignPopup}/>
      </UiUxResources>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const session = await getSession(context)
    const uiUxReq = await UiUxResourcesServices.getUiUxResourcesHomePage(session?.user?.accessToken);
    const uiUxFooterReq = await UiUxResourcesServices.getUiUxResourcesFooter(session?.user?.accessToken);
    const FooterLinksData = await UiUxResourcesServices.getLayoutiFooter();
    return {
      props: {
        pages: uiUxReq?.data?.data?.Pages,
        categories: uiUxReq?.data?.data?.Categories,
        headerContent: uiUxReq?.data?.data?.headerContent,
        footerContent: uiUxFooterReq?.data?.data,
        seoData: uiUxReq?.data?.data?.seo,
        footerData: FooterLinksData?.data.data,
        session
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

export default Resources;
