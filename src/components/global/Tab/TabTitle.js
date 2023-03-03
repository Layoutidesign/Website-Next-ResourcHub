/** @format */

import styles from "./Tab.module.scss";

import {
  RightArrowDarkIcon,
  RightArrowLightIcon,
} from "@/components/global/Svgs";

const TabTitle = ({ text, index, setActiveTab, activeTab }) => {
  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <li
      className={`${text === activeTab ? styles["active"] : ""}`}
      onClick={() => handleClick(text)}
    >
      {text}
      {text === activeTab ? <RightArrowDarkIcon /> : <RightArrowLightIcon />}
    </li>
  );
};

export default TabTitle;
