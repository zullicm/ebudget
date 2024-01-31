import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBudget } from "../Redux/Features/BudgetSlice";



function Budget({childBudget, removeBudget}){
  const {name, amount, color, start_date, end_date, user_id, id} = childBudget
  const dispatch = useDispatch()
  const history = useNavigate()

  function toBudgetPage(){
    dispatch(setBudget(childBudget))
    history('/budgetpage')
  }

  function deleteBudget(e){
    e.preventDefault()
    fetch(`/budgets/${id}`,{
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => removeBudget(id))
  }


  console.log(id)


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