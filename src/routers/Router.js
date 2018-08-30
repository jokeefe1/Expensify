import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";

const Router = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
