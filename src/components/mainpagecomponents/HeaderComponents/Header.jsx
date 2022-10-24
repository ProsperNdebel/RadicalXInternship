import React from "react";
import classes from "./Header.module.css";
import Button from "../../reusable-components/Button";
function Header() {
  return (
    <div className={classes.outerWrapper}>
      <h3>Internships</h3>
      <Button
        width="140px"
        height="25px"
        color="#fff"
        bgColor="rgba(121, 62, 245, 1)"
        active="false"
        type="create"
        text="Create New Internship"
        renderImg={"true"}
      />
    </div>
  );
}

export default Header;
