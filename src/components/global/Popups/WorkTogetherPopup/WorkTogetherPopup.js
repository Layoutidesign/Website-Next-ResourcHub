/** @format */

import { useState } from "react";

import styles from "./WorkTogetherPopup.module.scss";

import { CloseIcon, LinkForInputIcon } from "../../Svgs";

import UiUxResourcesServices from "@/services/uiUxResources.services";

const WorkTogetherPopup = ({
  setShowPopup,
  showPopup,
  setShowSuccessPopup,
}) => {
  const handleClose = () => setShowPopup(false);
  const [resourceName, setResourceName] = useState("");
  const [resourceLink, setResourceLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    UiUxResourcesServices.addResource(resourceName, resourceLink)
      .then((res) => {
        setResourceName("");
        setResourceLink("");
        setShowPopup(false);
        setShowSuccessPopup(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div
      className={`${styles["popupOverlay"]} ${showPopup ? styles["show"] : ""}`}
    >
      <section className={`${styles["workTogetherPopup"]} `}>
        <header>
          <h3>Submit a Resource</h3>
          <button type="button" onClick={handleClose}>
            <CloseIcon />
          </button>
        </header>
        <main>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="resourcesName">
                Resources Name<span>*</span>
              </label>
              <input
                required
                type="text"
                id="resourcesName"
                placeholder="Website Name"
                min={8}
                value={resourceName}
                onChange={(e) => setResourceName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="resourcesLink">
                Resources Link<span>*</span>
              </label>
              <div className={styles["inputContainer"]}>
                <LinkForInputIcon />
                <input
                  required
                  type="text"
                  id="resourcesLink"
                  placeholder="Enter the link here"
                  value={resourceLink}
                  onChange={(e) => setResourceLink(e.target.value)}
                />
              </div>
            </div>
            <div className={styles["buttons"]}>
              <button type="button" onClick={handleClose}>
                Cancel
              </button>
              <button
                type="submit"
                className={
                  resourceName.length < 9 || !resourceLink
                    ? styles["disabled"]
                    : ""
                }
                disabled={resourceName.length < 9 || !resourceLink}
              >
                Submit
              </button>
            </div>
          </form>
        </main>
      </section>
    </div>
  );
};

export default WorkTogetherPopup;
