/** @format */

import SEOHead from "@/components/global/SEOHead/SEOHead";

import UiUxResources from "@/components/layouts/UiUxResources";
import ContentHeader from "@/components/uiuxresourses/SearchPage/ContentHeader";
import Resources from "@/components/uiuxresourses/SearchPage/Resources";

import UiUxResourcesServices from "@/services/uiUxResources.services";
import { useState } from "react";

const SubSlug = ({ data, tags, categoryName, subCategoryName, seoData, footer }) => {
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
      />
      <UiUxResources footerContent={footer}>
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

    return {
      props: {
        data: subCategoryReq?.data?.data,
        tags: tagsReq?.data?.data,
        seoData:SeoData?.data?.data,
        subCategoryName: search,
        footer: footer?.data?.data

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
