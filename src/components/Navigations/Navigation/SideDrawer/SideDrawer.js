import React from "react";
import Logo from "../../../Logo/Logo";
import "./SideDrawer.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Wrapper from "../../../../hoc/Warpper";
import BackDrop from "../../../UI/BackDrop/BackDrop";
const sideDrawer = props => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <Wrapper>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className="Logo_SideBar">
          <Logo />
        </div>

        <div>
          <NavigationItems />
        </div>
      </div>
    </Wrapper>
  );
};

export default sideDrawer;
