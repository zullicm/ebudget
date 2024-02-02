import React from "react";
import CategoryForm from "../Component/CategoryForm";

import { useSelector } from "react-redux";

function BudgetPage(){
  const budget = useSelector(state => state.budget.budget)

  console.log(budget)
  return(
    <div>
      <CategoryForm />
    </div>
  )
}

export default BudgetPage