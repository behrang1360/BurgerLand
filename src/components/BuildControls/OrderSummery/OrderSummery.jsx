import React, { Component } from "react";
import Wrapper from "../../../hoc/Warpper";
import Button from "../../UI/Button/Button";
import { withRouter } from "react-router-dom";

class OrderSummery extends Component {
  componentWillUpdate() {}

  render() {
    let ingredientsSummery = Object.keys(this.props.ingredients).map(key => {
      return (
        <li key={key}>
          {" "}
          {key} : {this.props.ingredients[key]}{" "}
        </li>
      );
    });

    return (
      <Wrapper>
        <h3>Your order</h3>
        <ul>{ingredientsSummery}</ul>
        <p>
          <strong>Total Price : {this.props.price.toFixed(2)}</strong>
        </p>
        <Button Clicked={this.props.cancelClicked} style="Danger">
          Cancel
        </Button>
        <Button style="Success" Clicked={this.props.continueClicked}>
          Continue
        </Button>
      </Wrapper>
    );
  }
}

export default withRouter(OrderSummery);
