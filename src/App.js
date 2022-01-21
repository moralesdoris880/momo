import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import {Route, Switch } from "react-router-dom";
import Women from "./components/shopping/Women";
import Men from "./components/shopping/Men";
import Kids from "./components/shopping/Kids";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
     <NavBar />
     <Switch>
       <Route path="/women-main">
         <Women />
       </Route>
       <Route path="/men-main">
         <Men />
       </Route>
       <Route path="/kids-main">
         <Kids />
       </Route>
       <Route path="/">
         <Home />
       </Route>
     </Switch>
    </div>
  );
}

export default App;
