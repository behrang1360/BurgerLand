import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "../src/containers/BurgerBuilder/BurgerBuilder";
import { Route, Switch } from "react-router-dom";
import Checkout from "./containers/Checkout/Checkout";
function App() {
  return (
    <React.Fragment>
      <Layout>
        <Switch>
          <Route path="/Checkout" component={Checkout}></Route>
          <Route path="/" component={BurgerBuilder}></Route>
        </Switch>
      </Layout>
    </React.Fragment>
  );
}

export default App;
