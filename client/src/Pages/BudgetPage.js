import React, { useContext } from "react";
import { BudgetContext } from "../Context/budget";

function BudgetPage(){
  const {budget, setBudget} = useContext(BudgetContext)
  console.log(budget)
  return(
    <div>
      BudgetPage
    </div>
  )
}

export default BudgetPage