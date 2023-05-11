/** @format */

import { useEffect, useState } from "react";
import Header from "@/components/global/HeaderTest/Header";
import Footer from "@/components/global/Footer/Footer";
import Sidebar from "@/components/global/SidebarTest/Sidebar";
import ScrollTop from "@/components/global/ScrollTop";
import WorkTogetherSection from "../resources/WorkTogetherSection/WorkTogetherSection";
import WorkTogetherPopup from "../global/Popups/WorkTogetherPopup/WorkTogetherPopup";
import SignPopup from "../global/Popups/SignPopup/SignPopup";
import { ToastContainer } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { favAction } from "@/store/favourite";
import SuccessPopup from "../global/Popups/SuccessPopup copy/SuccessPopup";


const UiUxResources = ({ children, footerContent, noTop,footer, footerData, session,setShowSignPopup,showSignPopup}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(favAction.changeFavCount(footerContent?.navbar?.dotCount))
  }, []);

  return (
    <>
      <Header  data={footerContent?.navbar} session={session}/>
      {footerData&&<Sidebar data={footerData}/>}
      <main>{children}</main>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    
        <ToastContainer />
      <ScrollTop />
      <WorkTogetherPopup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        setShowSuccessPopup={setShowSuccessPopup}
      />
      <SignPopup setShowSignPopup={setShowSignPopup} showSignPopup={showSignPopup} session={session} data={footerContent?.navbar}/>
      
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
