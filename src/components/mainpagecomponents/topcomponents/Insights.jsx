import React from "react";
import classes from "./Insights.module.css";
import Button from "../../reusable-components/Button";
import graph1 from "../../../svgimages/Funnel.svg";

function Insights() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.leftWing}>
        <h4>Internship Insights</h4>
        <p>
          In the eighteenth century the German philosopher Immanuel Kant
          developed a theory of knowledge in which knowledge about space can be
          both a priori and synthetic
        </p>
      </div>
      <div className={classes.rightWing}>
        <div className={classes.innerHeader}>
          <div className={classes.btnPair}>
            <Button
              width="60px"
              height="25px"
              color="#fff"
              bgColorr={"rgba(121, 62, 245, 1)"}
              active="true"
              text="This month"
            />
            <Button
              width="60px"
              height="25px"
              color="#000"
              bgColorr={"rgb(255, 255, 255, 1)"}
              active="false"
              text="This week"
            />
          </div>
          <div>
            <Button
              width="100px"
              height="25px"
              color="#000"
              bgColorr={"#fff"}
              active="true"
              text="Select dates"
              type="damn"
              renderImg={true}
            />
          </div>
        </div>
        <div className={classes.bottomPart}>
          <img src={graph1} className={classes.stats} alt="stats" />
        </div>
      </div>
    </div>
  );
}

export default Insights;
