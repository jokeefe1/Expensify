import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <Link to="/">Home</Link>
    <Link to="/add">Add Expense</Link>
    <Link to="/help">Help</Link>
  </header>
);

export default Header;
