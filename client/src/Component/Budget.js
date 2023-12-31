import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { BudgetsContext } from "../Context/budgets";
import { BudgetContext } from "../Context/budget";

function Budget({childBudget}){
  const {name, amount, color, start_date, end_date, user_id, id} = childBudget
  const {budgets, setBudgets} = useContext(BudgetsContext)
  const {budget, setBudget} = useContext(BudgetContext)
  const history = useNavigate()

  function toBudgetPage(){
    setBudget(childBudget)
    history('/budgetpage')
  }

  function deleteBudget(e){
    e.preventDefault()
    fetch(`/budgets/${id}`,{
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => ridBudget(data))
  }

  function ridBudget(oldBudget){
    const newBudgets = budgets.filter(budget => budget.id !== oldBudget.id)
    setBudgets(newBudgets)
  }

  return(
    <div className="budget">
      <p>{name} - ${amount}</p>
      <p>{color}</p>
      <p>{start_date} - {end_date}</p>
      <button onClick={deleteBudget}>Delete Budget</button><br/>
      <button onClick={toBudgetPage}>Budget Page</button>
    </div>
  )
}

export default Budget