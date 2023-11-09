import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return(
    <div id="NavBar">
      <NavLink className="eBudget-Logo" exact to="/">eBudget</NavLink>
      <NavLink className="item item-1" exact to="/formpage">BudgetFormPage</NavLink>
      <div className="item item-2">Item 2</div>
      <div className="item item-3">Item 3</div>
      <NavLink className="item item-4" exact to="/login">Profile</NavLink>
    </div>
  )
}

export default NavBar