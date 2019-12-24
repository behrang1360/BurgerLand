import React from "react";
import "./Burger.css";
import BurgerIngerdient from "../Burger/BurgerIngerdient/BurgerIngerdient";

const burger = props => {
  return (
    <div className="Burger">
      <BurgerIngerdient type="BreadTop"></BurgerIngerdient>
      <BurgerIngerdient type="Salad"></BurgerIngerdient>
      <BurgerIngerdient type="BreadBottom"></BurgerIngerdient>
    </div>
  );
};

export default burger;
