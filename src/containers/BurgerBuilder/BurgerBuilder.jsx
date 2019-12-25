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
    ingerdients: {
      Salad: 0,
      Meat: 0,
      Bacon: 0,
      Cheese: 0
    },
    totalPrice: 1.5,
    canOrder: false,
    ordering: false
  };

  orderButtonHandler = () => {
    this.setState({ ordering: true });
  };

  closeModalHandler = () => {
    this.setState({ ordering: false });
  };
  updateCanOrder = ingerdients => {
    const totalAmount = Object.keys(ingerdients)
      .map(key => {
        return ingerdients[key];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({
      canOrder: totalAmount > 0
    });
  };

  addIngerdientHandler = type => {
    let ingerdient = this.state.ingerdients[type];
    let newIngerdientValue = ingerdient + 1;
    let ingerdients = { ...this.state.ingerdients };
    ingerdients[type] = newIngerdientValue;
    let newTotalPrice = this.state.totalPrice + INGERDIENT_PRICE[type];
    this.setState({
      ingerdients,
      totalPrice: newTotalPrice
    });
    this.updateCanOrder(ingerdients);
  };

  removeIngerdientHandler = type => {
    let ingerdient = this.state.ingerdients[type];
    if (ingerdient <= 0) {
      return;
    }
    let newIngerdientValue = ingerdient - 1;
    let ingerdients = { ...this.state.ingerdients };
    ingerdients[type] = newIngerdientValue;
    let newTotalPrice = this.state.totalPrice - INGERDIENT_PRICE[type];
    this.setState({
      ingerdients,
      totalPrice: newTotalPrice
    });
    this.updateCanOrder(ingerdients);
  };

  render() {
    const disabledIngerdient = {
      ...this.state.ingerdients
    };
    for (let key in disabledIngerdient) {
      disabledIngerdient[key] = disabledIngerdient[key] <= 0;
    }

    return (
      <Wrapper>
        <Modal show={this.state.ordering} modalClosed={this.closeModalHandler}>
          <OrderSummery
            price={this.state.totalPrice}
            Clicked={this.closeModalHandler}
            ingerdients={this.state.ingerdients}
          ></OrderSummery>
        </Modal>
        <div>BurgerBuilder</div>
        <Burger ingerdients={this.state.ingerdients}></Burger>
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
