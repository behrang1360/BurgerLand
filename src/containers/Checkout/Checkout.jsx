import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import CheckoutSummary from "../../components/Order/CheckoutSummery/CheckoutSummery";

class Checkout extends Component {
  componentDidMount() {
    
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
       
        ingredients[param[0]] = +param[1];
    }
    this.setState({ingredients: ingredients});

  }

  state = {
    ingredients: {
      Salad: 1,
      Meat: 1,
      Cheese: 1,
      Bacon: 1
    }
  };
  checkoutCancellHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinueHandler = () => {};

  render() {
    return (
      <div>
        <CheckoutSummary
          checkoutCancelled={this.checkoutCancellHandler}
          checkoutContinued={this.checkoutContinueHandler}
          ingredients={this.state.ingredients}
        />
      </div>
    );
  }
}

export default withRouter(Checkout);
