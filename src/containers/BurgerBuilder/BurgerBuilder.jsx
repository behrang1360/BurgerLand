import React, { Component } from "react";
import Wrapper from "../../hoc/Warpper";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummery from "../../components/BuildControls/OrderSummery/OrderSummery";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

class BurgerBuilder extends Component {
  state = {
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
    return totalAmount > 0;
  };

  addIngerdientHandler = type => {
    let ingerdient = this.props.ings[type];
    let newIngerdientValue = ingerdient + 1;
    let ingredients = { ...this.props.ings };
    ingredients[type] = newIngerdientValue;
    let newTotalPrice = this.props.totalPrice;
    this.setState({
      ingredients,
      totalPrice: newTotalPrice
    });
    this.updateCanOrder(ingredients);
  };

  removeIngerdientHandler = type => {
    let ingerdient = this.props.ings[type];
    if (ingerdient <= 0) {
      return;
    }
    let newIngerdientValue = ingerdient - 1;
    let ingredients = { ...this.props.ings };
    ingredients[type] = newIngerdientValue;
    let newTotalPrice = this.props.newTotalPrice;
    this.setState({
      ingredients,
      totalPrice: newTotalPrice
    });
    this.updateCanOrder(ingredients);
  };

  continueHandler = () => {
    const queryParam = [];
    for (let i in this.props.ings) {
      queryParam.push(
        encodeURIComponent(i) + "=" + encodeURIComponent(this.props.ings[i])
      );
    }
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryParam.join("&")
    });
  };

  render() {
    const disabledIngerdient = {
      ...this.props.ings
    };
    for (let key in disabledIngerdient) {
      disabledIngerdient[key] = disabledIngerdient[key] <= 0;
    }

    return (
      <Wrapper>
        <Modal show={this.state.ordering} modalClosed={this.closeModalHandler}>
          <OrderSummery
            price={this.props.totalPrice}
            cancelClicked={this.closeModalHandler}
            continueClicked={this.continueHandler}
            ingredients={this.props.ings}
          ></OrderSummery>
        </Modal>
        <Burger ingredients={this.props.ings}></Burger>
        <BuildControls
          addIngerdient={this.props.onAddIngredient}
          removeIngerdient={this.props.onRemoveIngredient}
          disabledInfo={disabledIngerdient}
          totalPrice={this.props.totalPrice}
          canOrder={this.updateCanOrder(this.props.ings)}
          orderClick={this.orderButtonHandler}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return { ings: state.ingredients, totalPrice: state.totalPrice };
};

const mapDispatchtoProps = dispatch => {
  return {
    onAddIngredient: name =>
      dispatch({ type: actionTypes.ADD_INGREDIENT, ingerdientName: name }),
    onRemoveIngredient: name =>
      dispatch({
        type: actionTypes.REMOVE_INGREDIENT,
        ingerdientName: name
      })
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(BurgerBuilder);
