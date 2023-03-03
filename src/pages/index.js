/** @format */

import SEOHead from "@/components/global/SEOHead/SEOHead";

import UiUxResources from "@/components/layouts/UiUxResources";

function Home() {
  return (
    <>
      <SEOHead title="Home" description="description of the page" />
      <UiUxResources>
        <div>Hello world</div>
      </UiUxResources>
    </>
  );
}

export default Home;
