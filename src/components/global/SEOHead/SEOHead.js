/** @format */

import Head from "next/head";
import { globalMeta } from "@/data/static-data";

function SEOHead({
  title = globalMeta.title,
  description = globalMeta.description,
  canonicalUrl = globalMeta.siteUrl,
  ogType = globalMeta.ogType,
  ogImgUrl = globalMeta.siteLogo,
  keywords = globalMeta.keywords,
  ogTitle = globalMeta.title,
  ogDescription = globalMeta.description,
  children,
}) {
  return (
    <Head>
      {/*
        	Fundamental head elements important for SEO.
    	*/}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/*
        	Open graph meta tags.
    	*/}
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={globalMeta.siteName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImgUrl} />
      <meta property="og:url" content={canonicalUrl} />

      {children}
    </Head>
  );
}

export default SEOHead;
