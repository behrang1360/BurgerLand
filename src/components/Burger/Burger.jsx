import React from "react";
import "./Burger.css";
import BurgerIngerdient from "../Burger/BurgerIngerdient/BurgerIngerdient";

const burger = props => {
  let transformIngerdient = Object.keys(props.ingerdients).map(igKey => {
    return [...Array(props.ingerdients[igKey])].map((_, index) => {
      return (
        <BurgerIngerdient key={index + igKey} type={igKey}></BurgerIngerdient>
      );
    });
  });
  return (
    <div className="Burger">
      <BurgerIngerdient type="BreadTop"></BurgerIngerdient>
      {transformIngerdient}
      <BurgerIngerdient type="BreadBottom"></BurgerIngerdient>
    </div>
  );
};

export default burger;
