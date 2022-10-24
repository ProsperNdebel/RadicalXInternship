import React from "react";
import classes from "./Internship.module.css";
import graph from "../../../svgimages/Candidatesdescretegraph.svg";
import chart from "../../../svgimages/chart.svg";
import people from "../../../svgimages/profile-2user.png";
import more from "../../../svgimages/more-2.svg";
function Internship() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.description}>
        <h3>Product Designs GV1</h3>
        <p>Amet minim mollit non deserunt est sit aliqua dolo do amet sint</p>
      </div>
      <div className={classes.duration}>
        <h3>120 days</h3>
        <p>created on 10/12/2021</p>
      </div>
      <div className={classes.enrolled}>
        <h3 className={classes.days}>20,000</h3>
      </div>
      <img src={graph} alt="graph" className={classes.graph} />
      <div className={classes.imgGroup}>
        <img src={chart} />
        <img src={people} />
        <img src={more} />
      </div>
    </div>
  );
}

export default Internship;
