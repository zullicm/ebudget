import React, {useState} from "react";

function Budget({budget}){
  const {name, amount, color, start_date, end_date, user_id, id} = budget

  function deleteBudget(e){
    e.preventDefault()
    fetch(`/budgets/${id}`,{
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => console.log(data))
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