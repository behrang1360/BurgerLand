import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "../src/containers/BurgerBuilder/BurgerBuilder";
function App() {
  return (
    <React.Fragment>
      <Layout>
        <BurgerBuilder></BurgerBuilder>
        
      </Layout>
    </React.Fragment>
  );
}

export default App;
