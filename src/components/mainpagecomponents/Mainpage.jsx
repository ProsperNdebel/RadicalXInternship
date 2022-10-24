import React from "react";
import Insights from "./topcomponents/Insights";
import Header from "./HeaderComponents/Header";
import classes from "./Mainpage.module.css";
import Internshiptitles from "./Bottompart/Internshiptitles";
import Internship from "./Bottompart/Internship";
function Mainpage() {
  return (
    <div>
      <Header />
      <Insights />
      <Internshiptitles />
      <div className={classes.internshipsList}>
        <Internship />
        <Internship />
        <Internship />
        <Internship />
        <Internship />
      </div>
    </div>
  );
}

export default Mainpage;
