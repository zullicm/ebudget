import React, {useState, useContext} from "react";
import { BudgetsContext } from "../Context/budgets";

function Budget({budget}){
  const {name, amount, color, start_date, end_date, user_id, id} = budget
  const {budgets, setBudgets} = useContext(BudgetsContext)


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
    <div className="budget" >
      <p>{name} - ${amount}</p>
      <p>{color}</p>
      <p>{start_date} - {end_date}</p>
      <button onClick={deleteBudget}>Delete Budget</button>
    </div>
  )
}

export default Budget