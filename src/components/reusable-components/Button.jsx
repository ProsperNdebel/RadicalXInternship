import React from "react";
import addInternship from "../../svgimages/add-square.svg";
import Calendar from "../../svgimages/calendar-2.png";
import classes from "./Button.module.css";

function Button({
  width,
  height,
  color,
  bgColorr,
  active,
  type,
  text,
  renderImg,
}) {
  return (
    <div
      style={{
        width: width,
        height: height,
        color: active ? color : "#fff",
        background: bgColorr,
      }}
      className={classes.wrapper}
    >
      {renderImg ? (
        <img
          src={type === "create" ? addInternship : Calendar}
          alt="logoImg"
          className={classes.btnImg}
        />
      ) : (
        ""
      )}
      {text}
    </div>
  );
}

export default Button;
