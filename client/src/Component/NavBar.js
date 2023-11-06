import React from "react";

function NavBar() {

  function navTest(word){
    console.log(word)
  }

  return(
    <div id="NavBar">
      <div onClick={() => navTest("eBudget Logo")} className="eBudget-Logo">eBudget</div>
      <div onClick={() => navTest()} className="item item-1">Item 1</div>
      <div onClick={() => navTest()} className="item item-2">Item 2</div>
      <div onClick={() => navTest()} className="item item-3">Item 3</div>
      <div onClick={() => navTest("Profile")} className="item item-4">Profile</div>
    </div>
  )
}

export default NavBar