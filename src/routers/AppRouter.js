import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import ExpenseDashboard from "../components/ExpenseDashboard";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ExpenseDashboard} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
