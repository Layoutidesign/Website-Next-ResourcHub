/** @format */

import SEOHead from "@/components/global/SEOHead/SEOHead";

import UiUxResources from "@/components/layouts/UiUxResources";
import ContentHeader from "@/components/uiuxresourses/InnerPage/ContentHeader";
import Resources from "@/components/uiuxresourses/InnerPage/Resources";

import UiUxResourcesServices from "@/services/uiUxResources.services";

const SubSlug = ({ data, tags }) => {
 
  return (
    <>
      <SEOHead
        title={`${data?.Category?.name} - ${data?.name}`}
        description="description of the page "
      />
      <UiUxResources footerContent={data?.footerContent}>
        {data && (
          <>
            <ContentHeader
              categoryName={data?.Category?.name}
              subCategoryName={data?.name}
              subCategoryDescription={data?.description}
            />

            <Resources
              innerPages={data?.InnerPage || []}
              tags={tags ? tags : []}
            />
          </>
        )}
      </UiUxResources>
    </>
  );
};

export async function getServerSideProps(ctx) {
  try {
    const { slug, subSlug } = ctx.params;
    const subCategoryReq = await UiUxResourcesServices.getSubCategoryByName(
      subSlug
    );
    const tagsReq = await UiUxResourcesServices.getResourcesTags();
    const [{ data }, tagsRes] = await Promise.all([subCategoryReq, tagsReq]);

    return {
      props: {
        data: data?.data,
        tags: tagsRes?.data?.data,
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
