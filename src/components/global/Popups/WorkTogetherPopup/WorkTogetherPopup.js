/** @format */

import { useState } from "react";

import styles from "./WorkTogetherPopup.module.scss";

import { CloseIcon, LinkForInputIcon } from "../../Svgs";

import UiUxResourcesServices from "@/services/uiUxResources.services";
import { ColorRing, Rings } from 'react-loader-spinner'

const WorkTogetherPopup = ({
  setShowPopup,
  showPopup,
  setShowSuccessPopup,
}) => {
  const handleClose = () => setShowPopup(false);
  const [resourceName, setResourceName] = useState("");
  const [resourceLink, setResourceLink] = useState("");
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    UiUxResourcesServices.addResource(resourceName, resourceLink)
      .then((res) => {
        console.log('sdsds');
        setResourceName("");
        setResourceLink("");
        setShowPopup(false);
        setShowSuccessPopup(true);
        setLoading(false)
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
                {/* <img src={LinkForInputIcon} type="svg"/> */}
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
                  resourceName.length < 2 || !resourceLink
                    ? styles["disabled"]
                    : ""
                }
                disabled={resourceName.length < 2 || !resourceLink}
              >
                {!loading&&"Submit"}
                <ColorRing
                  visible={loading}
                  height="43"
                  width="43"
                  ariaLabel="blocks-loading"
                  wrapperClass="blocks-wrapper"
                  colors={['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']}
                />
              </button>
            </div>
          </form>
        </main>
      </section>
    </div>
  );
};

export default WorkTogetherPopup;
