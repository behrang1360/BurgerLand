import React, { Component } from "react";
import Warpper from "../../../hoc/Warpper";
import "./Modal.css";
import Backdrop from "../BackDrop/BackDrop";

class modal extends Component {

  componentWillUpdate(prevState, nextState) { 
    
    return ( nextState!= null && prevState.show != nextState.show)
    
  }
  render() {
    return (
      <Warpper>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className="Modal"
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Warpper>
    );
  }
}

export default modal;
