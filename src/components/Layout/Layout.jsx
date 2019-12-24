import React from "react";
import Wrapper from "../../hoc/Warpper";
import "./Layout.css";

const layout = props => {
  return (
    <Wrapper>
      <div>ToolBar</div>
      <main className="LayoutContent">{props.children}</main>
    </Wrapper>
  );
};

export default layout;
