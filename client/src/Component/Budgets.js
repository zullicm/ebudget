import React, {useContext, useEffect} from "react";
import { UserContext } from "../Context/user";
import { BudgetsContext } from "../Context/budgets";
import Budget from "./Budget";
import { useSelector } from "react-redux";

function Budgets(){
  const reduxBudgets = useSelector(state => state.budgets)

  console.log(reduxBudgets)
  const {budgets, setBudgets} = useContext(BudgetsContext)
  const {user, setUser} = useContext(UserContext)
  return(
    <div>
      {budgets.map(budget =><Budget key={budget.id} childBudget={budget} />)}
    </div>
  )
}

export default Budgets

