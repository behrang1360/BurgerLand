import React, { Component } from "react";
import Wrapper from "../../hoc/Warpper";
import Burger from "../../components/Burger/Burger";
class BurgerBuilder extends Component {
  render() {
    return (
      <Wrapper>
        <div>BurgerBuilder</div>
        <Burger></Burger>
      </Wrapper>
    );
  }
}

export default BurgerBuilder;
