import React, { Component } from "react";
import Wrapper from "../../../hoc/Warpper";
import Button from "../../UI/Button/Button";

class OrderSummery extends Component {

  componentWillUpdate() { 

  }

  render() {
    let ingerdientsSummery = Object.keys(this.props.ingerdients).map(key => {
      return (
        <li key={key}>
          {" "}
          {key} : {this.props.ingerdients[key]}{" "}
        </li>
      );
    });

    return (
      <Wrapper>
        <h3>Your order</h3>
        <ul>{ingerdientsSummery}</ul>
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

export default OrderSummery;
