import React, {useContext, useEffect} from "react";
import { UserContext } from "../Context/user";
import { BudgetsContext } from "../Context/budgets";

function Budgets(){
  const {budgets, setBudgets} = useContext(BudgetsContext)
  const {user, setUser} = useContext(UserContext)

  useEffect(() =>{
    fetch('/budgets')
    .then(res => res.json())
    .then(data => budgetSetter(data))
  },[])
  function budgetSetter(data){
    setBudgets(data)
    console.log(data)
  }



  return(
    <div>
      
    </div>
  )
}

export default Budgets

