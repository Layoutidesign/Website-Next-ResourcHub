/** @format */

import { useEffect, useState } from "react";
import Header from "@/components/global/HeaderTest/Header";
import Footer from "@/components/global/Footer/Footer";
import Sidebar from "@/components/global/SidebarTest/Sidebar";
import ScrollTop from "@/components/global/ScrollTop";
import WorkTogetherSection from "../resources/WorkTogetherSection/WorkTogetherSection";
import WorkTogetherPopup from "../global/Popups/WorkTogetherPopup/WorkTogetherPopup";
import SuccessPopup from "../global/Popups/SignPopup/SignPopup";
import SignPopup from "../global/Popups/SignPopup/SignPopup";


const UiUxResources = ({ children, footerContent, footer, footerData, session,setShowSignPopup,showSignPopup}) => {
  
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header  data={footerContent?.navbar} session={session}/>
      {footerData&&<Sidebar data={footerData}/>}
      <main>{children}</main>
      <ScrollTop />
      <WorkTogetherPopup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        setShowSuccessPopup={setShowSuccessPopup}
      />
      <SignPopup setShowSignPopup={setShowSignPopup} showSignPopup={showSignPopup}/>
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
