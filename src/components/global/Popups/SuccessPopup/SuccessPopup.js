/** @format */

import { useState } from "react";

import styles from "./SuccessPopup.module.scss";

import { CloseIcon, SuccessIcon, SuccessForMobileIcon } from "../../Svgs";

const SuccessPopup = ({ setShowSuccessPopup, showSuccessPopup, text }) => {
  const handleClose = () => setShowSuccessPopup(false);
  return (
    <div
      className={`${styles["popupOverlay"]} ${
        showSuccessPopup ? styles["show"] : ""
      }`}
    >
      <section className={`${styles["successPopup"]} `}>
        <header>
          <button type="button" onClick={handleClose}>
            <CloseIcon />
          </button>
        </header>
        <main>
          <SuccessIcon className="d-none d-md-block" />
          <SuccessForMobileIcon className="d-md-none" />
          <p>{text}</p>
          <button type="button" onClick={handleClose}>
            Cancel
          </button>
        </main>
      </section>
    </div>
  );
};

export default SuccessPopup;
