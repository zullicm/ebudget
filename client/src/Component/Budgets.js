import React from "react";
import Budget from "./Budget";
import { useSelector, useDispatch } from "react-redux";
import { deleteBudget } from "../Redux/Features/BudgetsSlice";

function Budgets(){
  const dispatch = useDispatch()
  const reduxBudgets = useSelector(state => state.budgets.budgets)

  function removeBudget(id){
    dispatch(deleteBudget(id))
  }

  return(
    <div>
      {reduxBudgets.map(budget =><Budget  childBudget={budget} removeBudget={removeBudget}/>)}
    </div>
  )
}

export default Budgets

