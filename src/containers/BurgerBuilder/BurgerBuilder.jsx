import React, { Component } from "react";
import Wrapper from "../../hoc/Warpper";
import Burger from "../../components/Burger/Burger";
class BurgerBuilder extends Component {
  state = {
    ingerdients: {
      Salad: 1,
      Meat: 2,
      Bacon: 1,
      Cheese: 1
    }
  };
  render() {
    return (
      <Wrapper>
        <div>BurgerBuilder</div>
        <Burger ingerdients={this.state.ingerdients}></Burger>
      </Wrapper>
    );
  }
}

export default BurgerBuilder;
