import React from "react";
import "./Button.css";

const button = props => {
  let classes = "Button " + props.style;
  return (
    <button onClick={props.Clicked} className={classes}>
      {props.children}
    </button>
  );
};

export default button;
