import React from "react";
import Warpper from "../../../hoc/Warpper";
import "./Modal.css";
import Backdrop from "../BackDrop/BackDrop";


const modal = props => (
  <Warpper>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className="Modal"
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      {props.children}
    </div>

  </Warpper>
);

export default modal;
