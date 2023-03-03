/** @format */
import SEOHead from "@/components/global/SEOHead/SEOHead";
import UiUxResources from "@/components/layouts/UiUxResources";
import Categories from "@/components/resources/Categories/Categories";
import LatestResources from "@/components/resources/LatestResources/LatestResources";
import UiUxResourcesServices from "@/services/uiUxResources.services";
import FirstContentSectionHome from "@/components/resources/FirstContentSectionHome/FirstContentSectionHome";

function Resources({
  pages,
  categories,
  headerContent,
  footerContent,
  seoData,
}) {
  console.log(headerContent);
  return (
    <>
      <SEOHead
        title={seoData?.titleEn}
        description={seoData?.descriptionEn}
        ogImgUrl={seoData?.facebookImage}
        keywords={seoData?.keywordsEn}
        ogTitle={seoData?.facebookTitleEn}
        ogDescription={seoData?.facebookDescriptionEn}
      />
      <UiUxResources footerContent={footerContent}>
        <FirstContentSectionHome
          title={headerContent?.title}
          description={headerContent?.description}
          image={headerContent?.image}
          imageForMobile={headerContent?.imageMobile}
          subTitle={headerContent?.subTitle}
          subDescription={headerContent?.subDescription}
        />
        <Categories categories={categories ? categories : []} />
        <LatestResources resources={pages || []} />
      </UiUxResources>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  try {
    const uiUxReq = await UiUxResourcesServices.getUiUxResourcesHomePage();
    const [{ data }] = await Promise.all([uiUxReq]);
    return {
      props: {
        pages: data?.data?.Pages,
        categories: data?.data?.Categories,
        headerContent: data?.data?.headerContent,
        // footerContent: data?.data?.footerContent,
        seoData: data?.data?.seo,
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
