/** @format */

import SEOHead from "@/components/global/SEOHead/SEOHead";

import UiUxResources from "@/components/layouts/UiUxResources";
import ContentHeader from "@/components/uiuxresourses/FavPage/ContentHeader";
import Resources from "@/components/uiuxresourses/FavPage/Resources";

import UiUxResourcesServices from "@/services/uiUxResources.services";
import { getSession } from "next-auth/react";
import { useState } from "react";

const SubSlug = ({ data, tags, categoryName, subCategoryName, seoData, footer, footerData, session }) => {
  const [showLoading, setShowLoading] = useState(false);
  const [total, setTotal] = useState(null);
  console.log(session);
  return (
    <>
     <SEOHead
        title={seoData?.titleEn}
        image={seoData?.image}
        description={seoData?.descriptionEn}
        ogImgUrl={seoData?.facebookImage}
        keywords={seoData?.keywords}
        ogTitle={seoData?.facebookTitleEn}
        ogDescription={seoData?.facebookDescriptionEn}
        favicon={footer?.navbar?.favIcon}

      />
      <UiUxResources footerContent={footer} footerData={footerData} session={session}>
        {data && (
          <>
            <ContentHeader
              categoryName={categoryName?.split("-").join(" ")}
              subCategoryName={"Favoutire"}
              subCategoryDescription={""}
              numberOfPages={data?.pagination?.total}
            />
            <Resources
              innerPages={data.pages}
              tags={tags ? tags : []}
              total={data?.pagination?.total ?? 0}
              setTotal = {setTotal}
              showLoading={showLoading}
              setShowLoading={setShowLoading}
              categoryName={categoryName?.split("-").join(" ")}
              subCategoryName={subCategoryName?.split("-").join(" ")}
              session={session}
            />
          </>
        )}
      </UiUxResources>
    </>
  );
};

export async function getServerSideProps(ctx) {
  try {
    const session = await getSession(ctx)

    if(session == undefined) {
      return {
        redirect: {
          destination: '/resources',
          permanent: false
        }
      }
    }
    const subCategoryReq = await UiUxResourcesServices.getFav(session.user.accessToken);
    const tagsReq = await UiUxResourcesServices.getResourcesTags();
    const SeoData = await UiUxResourcesServices.getResourcesDetailsSeo();
    const footer = await UiUxResourcesServices.getFooter();
    const FooterLinksData = await UiUxResourcesServices.getLayoutiFooter();
    
    
 

    return {
      props: {
        data: subCategoryReq?.data?.data,
        tags: tagsReq?.data?.data,
        seoData:SeoData?.data?.data,
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
        tags: null,
      },
    };
  }
}

export default SubSlug;
