/** @format */

import styles from "./Tab.module.scss";

const TabHeaderForMobile = ({ tabHeaderData, setActiveTab, activeTab }) => {
  const handleChange = (e, i) => {
    setActiveTab(+e.target.value);
  };

  return (
    <select
      className={styles["select"]}
      onChange={handleChange}
      value={activeTab}
    >
      {tabHeaderData.map((tabTitle, i) => (
        <option key={i} value={i}>
          {tabTitle}
        </option>
      ))}
    </select>
  );
};

export default TabHeaderForMobile;
