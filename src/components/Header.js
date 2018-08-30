import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <Link to="/">Home</Link>
    <Link to="/create">Add Expense</Link>
    <Link to="/help">Help</Link>
  </header>
);

export default Header;
