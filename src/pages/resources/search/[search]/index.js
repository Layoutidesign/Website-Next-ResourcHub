/** @format */

import SEOHead from "@/components/global/SEOHead/SEOHead";

import UiUxResources from "@/components/layouts/UiUxResources";
import ContentHeader from "@/components/uiuxresourses/SearchPage/ContentHeader";
import Resources from "@/components/uiuxresourses/SearchPage/Resources";

import UiUxResourcesServices from "@/services/uiUxResources.services";
import { useState } from "react";

const SubSlug = ({ data, tags, categoryName, subCategoryName, seoData, footer , footerData}) => {
  const [showLoading, setShowLoading] = useState(false);
  const [total, setTotal] = useState(null);
  console.log(data);
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
      <UiUxResources footerContent={footer} footerData={footerData}>
        {data && (
          <>
            <ContentHeader
              categoryName={categoryName?.split("-").join(" ")}
              subCategoryName={"Search"}
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
            />
          </>
        )}
      </UiUxResources>
    </>
  );
};

export async function getServerSideProps(ctx) {
  try {
    const { search } = ctx.params;
    const subCategoryReq = await UiUxResourcesServices.getSearch(search);
    const tagsReq = await UiUxResourcesServices.getResourcesTags();
    const SeoData = await UiUxResourcesServices.getResourcesDetailsSeo();
    const footer = await UiUxResourcesServices.getFooter();
    const FooterLinksData = await UiUxResourcesServices.getLayoutiFooter();
    return {
      props: {
        data: subCategoryReq?.data?.data,
        tags: tagsReq?.data?.data,
        seoData:SeoData?.data?.data,
        subCategoryName: search,
        footer: footer?.data?.data,
        footerData: FooterLinksData?.data.data

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
