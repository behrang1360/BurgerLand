import React from "react";
import "./Burger.css";
import BurgerIngerdient from "../Burger/BurgerIngerdient/BurgerIngerdient";

const burger = props => {
  let transformIngerdient = Object.keys(props.ingerdients)
    .map(igKey => {
      return [...Array(props.ingerdients[igKey])].map((_, index) => {
        return (
          <BurgerIngerdient key={index + igKey} type={igKey}></BurgerIngerdient>
        );
      });
    })
    .reduce((arr, item) => {
      return arr.concat(item);
    }, []);
  if (transformIngerdient.length === 0) {
    transformIngerdient = <span>Please add ingerdeint</span>;
  }
  return (
    <div className="Burger">
      <BurgerIngerdient key="Top" type="BreadTop"></BurgerIngerdient>
      {transformIngerdient}
      <BurgerIngerdient key="Buttom" type="BreadBottom"></BurgerIngerdient>
    </div>
  );
};

export default burger;
