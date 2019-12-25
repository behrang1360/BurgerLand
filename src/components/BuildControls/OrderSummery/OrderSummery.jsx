import React from "react";
import Wrapper from "../../../hoc/Warpper";
import Button from "../../UI/Button/Button";

const orderSummery = porps => {
  let ingerdientsSummery = Object.keys(porps.ingerdients).map(key => {
    return (
      <li key={key}>
        {" "}
        {key} : {porps.ingerdients[key]}{" "}
      </li>
    );
  });

  return (
    <Wrapper>
      <h3>Your order</h3>
      <ul>{ingerdientsSummery}</ul>
      <p>
        <strong>Total Price : {porps.price.toFixed(2)}</strong>
      </p>
      <Button Clicked={porps.cancelClicked} style="Danger">
        Cancel
      </Button>
      <Button style="Success" Clicked={porps.continueClicked}>
        Continue
      </Button>
    </Wrapper>
  );
};

export default orderSummery;
