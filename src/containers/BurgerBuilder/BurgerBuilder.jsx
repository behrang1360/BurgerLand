import React, { Component } from "react";
import Wrapper from "../../hoc/Warpper";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";

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
    totalPrice: 1.5
  };

  addIngerdientHandler = type => {
    let ingerdient = this.state.ingerdients[type];
    let newIngerdientValue = ingerdient + 1;
    let ingerdients = { ...this.state.ingerdients };
    ingerdients[type] = newIngerdientValue;
    let newTotalPrice = this.state.totalPrice + INGERDIENT_PRICE[type];
    this.setState({
      ingerdients,
      totalPrice:newTotalPrice
    });
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
      totalPrice:newTotalPrice
    });
  };

  render() {
    debugger;
    const disabledIngerdient = {
      ...this.state.ingerdients
    };
    for (let key in disabledIngerdient) {
      disabledIngerdient[key] = disabledIngerdient[key] <= 0;
    }

    return (
      <Wrapper>
        <div>BurgerBuilder</div>
        <Burger ingerdients={this.state.ingerdients}></Burger>
        <BuildControls
          addIngerdient={this.addIngerdientHandler}
          removeIngerdient={this.removeIngerdientHandler}
          disabledInfo={disabledIngerdient}
          totalPrice ={this.state.totalPrice}
        />
      </Wrapper>
    );
  }
}

export default BurgerBuilder;
