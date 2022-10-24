import React from "react";
import SidebarItemTemplate from "../reusable-components/SidebarItemTemplate";

import logo from "../../svgimages/RadicallX.svg";
import classes from "./SideBar.module.css";
import userImage from "../../svgimages/Rectdashboard6.svg";

import Img1 from "../../svgimages/blocksdasboard1.svg";
import Img2 from "../../svgimages/medal-stardashboard2.svg";
import Img3 from "../../svgimages/bookdashboard3.svg";
import Img4 from "../../svgimages/briefcasedashboard4.svg";
import Img5 from "../../svgimages/setting-2dashboard5.svg";
import { v4 as uuidv4 } from "uuid";
const images = [
  { image: Img1, text: "Dashboard" },
  { image: Img2, text: "Apprenticeship" },
  { image: Img3, text: "Internships" },
  { image: Img4, text: "Jobs" },
  { image: Img5, text: "Settings" },
];

function SideBar() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.innerWrapper}>
        <img src={logo} className={classes.logo} alt="logo" />
        <div className={classes.sidebarOptions}>
          {images.map((item) => {
            let path = "../".concat(item.image);

            let id = uuidv4();
            return (
              <SidebarItemTemplate
                imge={item.image}
                text={item.text}
                className={classes.sibarItems}
                key={id}
              />
            );
          })}
        </div>
        <div className={classes.user}>
          <img src={userImage} className={classes.userImage} />
          <span>Adam Scott</span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
