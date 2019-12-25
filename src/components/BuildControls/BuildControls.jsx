import React from "react";
import BuildControl from "../../components/BuildControls/BuildControl/BuildControl";
import "./BuildControls.css";

const controls = [
  { lable: "Salad", type: "Salad" },
  { lable: "Bacon", type: "Bacon" },
  { lable: "Meat", type: "Meat" },
  { lable: "Cheese", type: "Cheese" }
];

const buildControls = props => {
  return (
    <div className="BuildControls">
       <strong>{props.totalPrice.toFixed(2)}</strong>
      {controls.map(el => {
        return (
          <BuildControl
            added={() => props.addIngerdient(el.type)}
            remove={()=>props.removeIngerdient(el.type)}
            label={el.type}
            type={el.type}
            key={el.type}
            disabled ={props.disabledInfo[el.type]}
          />
        );
      })}
    </div>
  );
};

export default buildControls;
