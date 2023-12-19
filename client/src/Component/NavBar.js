import React, { useContext }from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../Context/user";

function NavBar() {
  
  const {user, setUser} = useContext(UserContext)

  return(
    <div id="NavBar">
      <NavLink className="eBudget-Logo" exact to="/">eBudget</NavLink>
      <NavLink className="item item-1" exact to="/formpage">Budget</NavLink>
      <NavLink className="item item-2" exact to="/formpage">Category</NavLink>
      <NavLink className="item item-3" exact to="/formpage">Expense</NavLink>
      {user ? <NavLink className="item item-4" exact to="/login">{user.username}</NavLink> : <NavLink className="item item-4" exact to="/login">Profile</NavLink>}
    </div>
  )
}

export default NavBar