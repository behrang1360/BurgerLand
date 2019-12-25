import React, { Component } from "react";
import Wrapper from "../../hoc/Warpper";
import ToolBar from "../Navigations/Navigation/Toolbar/Toolbar";
import "./Layout.css";
import SideDrawer from "../Navigations/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: true
  };
  sideDrwerCloseHandler = () => {
    this.setState({
      showSideDrawer: false
    });
  };

  render() {
    return (
      <Wrapper>
        <div>
          <ToolBar />
          <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.sideDrwerCloseHandler}
          />
        </div>
        <main className="LayoutContent">{this.props.children}</main>
      </Wrapper>
    );
  }
}

export default Layout;
