/** @format */

import { useEffect, useState } from "react";
import Header from "@/components/global/HeaderTest/Header";
import Footer from "@/components/global/Footer/Footer";
import Sidebar from "@/components/global/SidebarTest/Sidebar";
import ScrollTop from "@/components/global/ScrollTop";
import WorkTogetherSection from "../resources/WorkTogetherSection/WorkTogetherSection";
import WorkTogetherPopup from "../global/Popups/WorkTogetherPopup/WorkTogetherPopup";
import SuccessPopup from "../global/Popups/SuccessPopup/SuccessPopup";

const UiUxResources = ({ children, footerContent, footer, footerData }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  console.log(footerContent);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header  data={footerContent?.navbar}/>
      {footerData&&<Sidebar data={footerData}/>}
      <main>{children}</main>
      <ScrollTop />
      <WorkTogetherPopup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        setShowSuccessPopup={setShowSuccessPopup}
      />
      <SuccessPopup
        showSuccessPopup={showSuccessPopup}
        setShowSuccessPopup={setShowSuccessPopup}
        text="Thank you for submitting this resource and assisting us. Gather these websites to assist other designers in their work."
      />
       {!footer&&<WorkTogetherSection
        setShowPopup={setShowPopup}
        title={footerContent?.footer?.title}
        description={footerContent?.footer?.description}
      />}
      {footerData&&<Footer  data={footerData}/>}
    </>
  );
};

export default UiUxResources;
