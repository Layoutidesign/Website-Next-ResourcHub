/** @format */

import { useEffect, useState } from "react";
import Header from "@/components/global/HeaderTest/Header";
import Footer from "@/components/global/Footer/Footer";
import Sidebar from "@/components/global/SidebarTest/Sidebar";
import ScrollTop from "@/components/global/ScrollTop";
import WorkTogetherSection from "../resources/WorkTogetherSection/WorkTogetherSection";
import WorkTogetherPopup from "../global/Popups/WorkTogetherPopup/WorkTogetherPopup";
import SuccessPopup from "../global/Popups/SuccessPopup/SuccessPopup";

const UiUxResources = ({ children, footerContent }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // useEffect(() => {
  //   if (showPopup) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  // }, [showPopup]);

  return (
    <>
      {/* {image && (
        <Image
          src={image}
          width={800}
          height={800}
          className="illustration-image"
          alt="illustration"
        />
      )} */}

      <Header />
      <Sidebar />
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
      <WorkTogetherSection
        setShowPopup={setShowPopup}
        title={footerContent?.title}
        description={footerContent?.description}
      />
      <Footer />
    </>
  );
};

export default UiUxResources;
