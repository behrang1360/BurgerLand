import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import {connect} from "react-redux"
import "./CheckoutSummery.css";

const checkoutSummary = props => {
  return (
    <div className="CheckoutSummary">
      <h1>We hope it tastes well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>

      <Button style="Danger" Clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button style="Success" Clicked={props.checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

const mapStatToProps = state => { 
  return {
    ings : state.ingredients
  }

}
export default connect(mapStatToProps) (checkoutSummary);
