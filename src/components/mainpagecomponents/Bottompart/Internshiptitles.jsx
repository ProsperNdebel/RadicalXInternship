import React from "react";
import classes from "./Internshiptitles.module.css";
import Arrowdown from "../../../svgimages/arrow-square-down.svg";

function Internshiptitles() {
  return (
    <div className={classes.container}>
      <h4>Internship Title</h4>
      <div className={classes.titles}>
        <div className={classes.title}>
          <img src={Arrowdown} alt="noImg" className={classes.arrowImg} />
          <p>Completion Period</p>
        </div>
        <div className={classes.title}>
          <img src={Arrowdown} alt="noImg" className={classes.arrowImg} />
          <p>Total enrolled</p>
        </div>
        <div className={classes.title}>
          <img src={Arrowdown} alt="noImg" className={classes.arrowImg} />
          <p>Qualified Candidates</p>
        </div>
        <div className={classes.title}>
          <img src={Arrowdown} alt="noImg" className={classes.arrowImg} />
        </div>
      </div>
    </div>
  );
}

export default Internshiptitles;
