import React from "react";
import LOGO from '../../Logo/Logo'
import "./ToolBar.css";

const toolbar = props => {
  return (
    <div className="Toolbar">
      <div>Menu</div>
      <LOGO/>
      <nav></nav>
    </div>
  );
};

export default toolbar;
