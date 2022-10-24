import React from "react";
import classes from "./SidebarItemTemplate.module.css";

function sidebarItemTemplate({ imge, text, active }) {
  return (
    <div
      className={classes.container}
      style={{
        backgroundColor: active ? "rgba(102, 95, 239, 0.2)" : "#fff",
        border: active ? "1px solid rgba(121, 62, 245, 1);" : "none",
      }}
    >
      <img className={classes.itemLogo} src={imge} alt="image not found" />
      <span className={classes.itemText}>{text}</span>
    </div>
  );
}

export default sidebarItemTemplate;
