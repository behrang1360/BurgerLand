import React, { Component } from "react";
import Wrapper from "../../hoc/Warpper";
import ToolBar from "../Navigations/Navigation/Toolbar/Toolbar";
import "./Layout.css";
import SideDrawer from "../Navigations/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };
  sideDrwerCloseHandler = () => {
    this.setState({
      showSideDrawer: false
    });
  };

  toggledHandler = () => {
    this.setState(prev => {
      return { showSideDrawer: !prev.showSideDrawer };
    });
  };

  render() {
    return (
      <Wrapper>
        <div>
          <ToolBar Toggled={this.toggledHandler} />
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
