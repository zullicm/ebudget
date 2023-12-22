import React, {useContext, useEffect} from "react";
import { UserContext } from "../Context/user";
import { BudgetsContext } from "../Context/budgets";
import Budget from "./Budget";

function Budgets(){
  const {budgets, setBudgets} = useContext(BudgetsContext)
  const {user, setUser} = useContext(UserContext)


  return(
    <div>
      {budgets.map(budget =><Budget budget={budget} />)}
    </div>
  )
}

export default Budgets

