import React, { Component } from "react";
import PropsType from "prop-types";
import "../BurgerIngerdient/BurgerIngerdient.css";

class BurgerIngerdient extends Component {
  render() {
    let ingerdient = null;

    switch (this.props.type) {
      case "BreadBottom":
        ingerdient = <div className="BreadBottom"></div>;
        break;
      case "BreadTop": {
        ingerdient = (
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
        );
        break;
      }
      case "Meat":
        ingerdient = <div className="Meat"></div>;
        break;
      case "Salad":
        ingerdient = <div className="Salad"></div>;
        break;
      case "Bacon":
        ingerdient = <div className="Bacon"></div>;
        break;
      case "Cheese":
        ingerdient = <div className="Cheese"></div>;
        break;
      default:
        break;
    }

    return ingerdient;
  }
}

BurgerIngerdient.PropsType = {
  type: PropsType.string.isRequired
};

export default BurgerIngerdient;
