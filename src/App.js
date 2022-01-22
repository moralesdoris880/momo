import React from "react";
import {Route, Switch } from "react-router-dom";
import Women from "./components/shopping/Women";
import Men from "./components/shopping/Men";
import Home from "./components/Home";
import Jewelery from "./components/shopping/Jewelery";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div id="top">
      <Header />
      </div>
     <Switch>
       <Route path="/women-main">
         <Women />
       </Route>
       <Route path="/men-main">
         <Men />
       </Route>
       <Route path="/jewelery-main">
         <Jewelery />
       </Route>
       <Route path="/">
         <Home />
       </Route>
     </Switch>
    </div>
  );
}

export default App;
