import React from "react";
import classes from "./HomePage.module.css";
import SideBar from "../sidebarcomponents/SideBar";
import Mainpage from "../mainpagecomponents/Mainpage";
import Internshiptitles from "../mainpagecomponents/Bottompart/Internshiptitles";
function HomePage() {
  return (
    <div className={classes.wrapper}>
      <div>
        <SideBar />
      </div>
      <div>
        <Mainpage />
      </div>
    </div>
  );
}

export default HomePage;
