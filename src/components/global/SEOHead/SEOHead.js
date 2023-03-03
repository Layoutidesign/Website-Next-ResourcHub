/** @format */

import Head from "next/head";
import { globalMeta } from "@/data/static-data";

function SEOHead({
  title ,
  description,
  canonicalUrl,
  ogType,
  ogImgUrl,
  keywords,
  ogTitle,
  ogDescription,
  image,
  children,
}) {

  return (
    <Head>
     
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="image" content={image} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={globalMeta.siteName} />
      <meta property="og:type" content={"facebook"} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImgUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <link rel="image_src"   content={image} />

      {children}
    </Head>
  );
}

export default SEOHead;
