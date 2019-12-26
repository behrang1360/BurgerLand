import React, { Component } from "react";
import Wrapper from "../../hoc/Warpper";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummery from "../../components/BuildControls/OrderSummery/OrderSummery";

const INGERDIENT_PRICE = {
  Salad: 0.5,
  Meat: 1.5,
  Cheese: 0.6,
  Bacon: 0.78
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      Salad: 0,
      Meat: 0,
      Bacon: 0,
      Cheese: 0
    },
    totalPrice: 1.5,
    canOrder: false,
    ordering: false
  };

  componentDidMount() {
    console.log(this.props);
  }

  orderButtonHandler = () => {
    this.setState({ ordering: true });
  };

  closeModalHandler = () => {
    this.setState({ ordering: false });
  };
  updateCanOrder = ingredients => {
    const totalAmount = Object.keys(ingredients)
      .map(key => {
        return ingredients[key];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({
      canOrder: totalAmount > 0
    });
  };

  addIngerdientHandler = type => {
    let ingerdient = this.state.ingredients[type];
    let newIngerdientValue = ingerdient + 1;
    let ingredients = { ...this.state.ingredients };
    ingredients[type] = newIngerdientValue;
    let newTotalPrice = this.state.totalPrice + INGERDIENT_PRICE[type];
    this.setState({
      ingredients,
      totalPrice: newTotalPrice
    });
    this.updateCanOrder(ingredients);
  };

  removeIngerdientHandler = type => {
    let ingerdient = this.state.ingredients[type];
    if (ingerdient <= 0) {
      return;
    }
    let newIngerdientValue = ingerdient - 1;
    let ingredients = { ...this.state.ingredients };
    ingredients[type] = newIngerdientValue;
    let newTotalPrice = this.state.totalPrice - INGERDIENT_PRICE[type];
    this.setState({
      ingredients,
      totalPrice: newTotalPrice
    });
    this.updateCanOrder(ingredients);
  };

  continueHandler = () => {
    const queryParam = [];
    for (let i in this.state.ingredients) {
      queryParam.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryParam.join("&")
    });
  };

  render() {
    const disabledIngerdient = {
      ...this.state.ingredients
    };
    for (let key in disabledIngerdient) {
      disabledIngerdient[key] = disabledIngerdient[key] <= 0;
    }

    return (
      <Wrapper>
        <Modal show={this.state.ordering} modalClosed={this.closeModalHandler}>
          <OrderSummery
            price={this.state.totalPrice}
            cancelClicked={this.closeModalHandler}
            continueClicked={this.continueHandler}
            ingredients={this.state.ingredients}
          ></OrderSummery>
        </Modal>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls
          addIngerdient={this.addIngerdientHandler}
          removeIngerdient={this.removeIngerdientHandler}
          disabledInfo={disabledIngerdient}
          totalPrice={this.state.totalPrice}
          canOrder={this.state.canOrder}
          orderClick={this.orderButtonHandler}
        />
      </Wrapper>
    );
  }
}

export default BurgerBuilder;
