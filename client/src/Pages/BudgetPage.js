import React, { useContext } from "react";
import { BudgetContext } from "../Context/budget";
import CategoryForm from "../Component/CategoryForm";

function BudgetPage(){
  const {budget, setBudget} = useContext(BudgetContext)
  console.log(budget)
  return(
    <div>
      <CategoryForm />
    </div>
  )
}

export default BudgetPage