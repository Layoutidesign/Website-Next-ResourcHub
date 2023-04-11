/** @format */

import SEOHead from "@/components/global/SEOHead/SEOHead";

import UiUxResourcesServices from "@/services/uiUxResources.services";

import UiUxResources from "@/components/layouts/UiUxResources";
import FirstContentSection from "@/components/uiuxresourses/Content/FirstContentSection";
import Categories from "@/components/uiuxresourses/Categories/Categories";
import { getSession } from "next-auth/react";

function Slug({ data, params, seoData, categories, footer, footerData,session }) {
  return (
    <>
      <SEOHead
        title={seoData?.titleEn}
        description={seoData?.descriptionEn}
        ogImgUrl={seoData?.facebookImage}
        keywords={seoData?.keywordsEn}
        ogTitle={seoData?.facebookTitleEn}
        ogDescription={seoData?.facebookDescriptionEn}
        favicon={footer?.navbar?.favIcon}
      />
      <UiUxResources footerContent={footer} footerData={footerData} session={session}>
        {data && (
          <>
            <FirstContentSection
              title={data?.headerContent?.title}
              description={data?.headerContent?.description}
              image={data?.headerContent?.vector}
              images={data?.headerContent?.Images}
            />
            <Categories categories={data?.categories || []} categoriesData={categories || []} params={params.split("-").join(" ")} />
          </>
        )}
      </UiUxResources>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const session = await getSession(context)
    const uiUxReq = await UiUxResourcesServices.getUiUxResources();
    const category = await UiUxResourcesServices.getSubCategoryByName(context?.params?.slug.split("-").join(" "), "category");
    const footer = await UiUxResourcesServices.getUiUxResourcesFooter(session?.user?.accessToken);
    const FooterLinksData = await UiUxResourcesServices.getLayoutiFooter();
    return {
      props: {
        data: uiUxReq?.data?.data,
        params: context?.params?.slug,
        seoData: uiUxReq?.data?.data?.seo,
        categories: category?.data?.data,
        footer: footer?.data?.data,
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

export default Slug;
