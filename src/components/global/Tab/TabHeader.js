/** @format */

import TabTitle from "./TabTitle";
import styles from "./Tab.module.scss";

const TabHeader = ({ tabHeaderData, activeTab, setActiveTab }) => {
  return (
    <ul className={styles["tabTitles"]}>
      {tabHeaderData?.map((tabTitle, i) => (
        <TabTitle
          key={i}
          index={i}
          text={tabTitle}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      ))}
    </ul>
  );
};

export default TabHeader;
