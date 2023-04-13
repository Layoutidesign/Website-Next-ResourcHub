/** @format */
import Content from "@/components/News/Content/Content";
import ContentHeader from "@/components/News/Header/ContentHeader";
import NewsTabs from "@/components/News/Tabs/NewsTabs";
import SEOHead from "@/components/global/SEOHead/SEOHead";
import UiUxResources from "@/components/layouts/UiUxResources";
import UiUxResourcesServices from "@/services/uiUxResources.services";
import { getSession } from "next-auth/react";
import { useState } from "react";

function News({
  footerContent,
  footerData,
  session,
  categories,
  news,
  category,
  latest
}) {
  const [showSignPopup, setShowSignPopup] = useState(false);
  console.log(news);
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
          <ContentHeader 
            categoryName={"News"}
            subCategoryName={"All"}
            count={news.length}
          />
          <NewsTabs data={categories} category={category.split('-').join(" ")} />
          <Content setShowSignPopup={setShowSignPopup}  session={session} data={news} latest={latest} color={category == "all"?"#26E71E":categories.filter(d => d.name.toLowerCase() == category.split('-').join(" "))[0]?.color}/>
      </UiUxResources>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const session = await getSession(context)
    let category = context.params.slug
    const news = await UiUxResourcesServices.getNews(category);
    const latest = await UiUxResourcesServices.getNewsLatest();
    const categories = await UiUxResourcesServices.getNewsCategory();
    const uiUxFooterReq = await UiUxResourcesServices.getUiUxResourcesFooter(session?.user?.accessToken);
    const FooterLinksData = await UiUxResourcesServices.getLayoutiFooter();
    return {
      props: {
        latest: latest?.data?.data,
        news: news?.data?.data?.Blogs,
        categories:categories?.data?.data,
        footerContent: uiUxFooterReq?.data?.data,
        footerData: FooterLinksData?.data.data,
        session,
        category
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
