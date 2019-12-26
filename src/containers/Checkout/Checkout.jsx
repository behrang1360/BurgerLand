import React, { Component } from "react";
import { Route } from "react-router-dom";
import ContactData from "../../containers/ContactData/ContactData";
import CheckoutSummary from "../../components/Order/CheckoutSummery/CheckoutSummery";

class Checkout extends Component {
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }
    this.setState({ ingredients: ingredients });
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
  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          checkoutCancelled={this.checkoutCancellHandler}
          checkoutContinued={this.checkoutContinueHandler}
          ingredients={this.state.ingredients}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          component={ContactData}
        ></Route>
      </div>
    );
  }
}

export default Checkout;
