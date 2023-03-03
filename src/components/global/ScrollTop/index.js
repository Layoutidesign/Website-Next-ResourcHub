/** @format */

import { useEffect, useState } from "react";
import styles from "./ScrollTop.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);
    return () =>
      window.removeEventListener("scroll", handleScrollButtonVisibility);
  }, []);

  function handleScroll() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {showButton && (
        <button
          className={`${styles["scroll_top"]} scroll_top`}
          onClick={handleScroll}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </>
  );
};

export default ScrollTop;
