import React from "react";
import {Route, Switch } from "react-router-dom";
import Women from "./components/shopping/Women";
import Men from "./components/shopping/Men";
import Home from "./components/Home";
import Jewelery from "./components/shopping/Jewelery";
import Header from "./components/Header";
import Filter from "./components/Filter";
import ModalBox from "./components/ModalBox";
import Suscribers from "./components/Suscribers";

function App() {
  return (
    <div className="App">
      <div id="top">
      <Header />
      </div>
    <div id="content">
      <Filter />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/women" exact>
          <Women />
        </Route>
        <Route path="/men" exact>
          <Men />
        </Route>
        <Route path="/jewelery" exact>
          <Jewelery />
        </Route>
       </Switch>
    </div>
    <ModalBox />
    <Suscribers />
    </div>
  );
}

export default App;
