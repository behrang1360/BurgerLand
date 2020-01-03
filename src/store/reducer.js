import * as actionTypes from "./actions";

const initState = {
  ingredients: {
    Salad: 0,
    Meat: 0,
    Bacon: 0,
    Cheese: 0
  },
  totalPrice: 1.5
};

const INGERDIENT_PRICE = {
  Salad: 0.5,
  Meat: 1.5,
  Cheese: 0.6,
  Bacon: 0.78
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT: {
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingerdientName]: state.ingredients[action.ingerdientName] + 1
          },          
          totalPrice: state.totalPrice + INGERDIENT_PRICE[action.ingerdientName]
      };
    }
    case actionTypes.REMOVE_INGREDIENT: {
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingerdientName]: state.ingredients[action.ingerdientName] - 1
        }
      };
    }
    default:
      return state;
  }
};

export default reducer;
