import React, { useState, useContext } from "react";
import { UserContext } from "../Context/user";
import { BudgetContext } from "../Context/budget";


function CategoryForm(){
  const [name, setName] = useState('')
  const [color, setColor] = useState('')
  const [description, setDescription] = useState('')
  const {user, setUser} = useContext(UserContext)
  const {budget, setBudget} = useContext(BudgetContext)
  
  function submitCategory(){
    fetch('/budgets',{
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify({
        name: name,
        description: description,
        color: color,
        user_id: user.id,
        budget_id: budget
      })
    })
    .then(r => {
      if(r.ok){
        r.json().then(data => console.log(data))
      }else{
        r.json().then(e => console.log(e))
      }
    })
  }

  return(
    <div className="form budget-form">
      <p>Category name</p>
      <input
      name="name"
      value={name}
      placeholder="Monthly Budget / Vaction"
      onChange={e => setName(e.target.value)}
      >
      </input>
      <br/>
        <p>Category description</p>
      <input
      name="description"
      value={description}
      placeholder="Bills"
      onChange={e => setDescription(e.target.value)}
      >
      </input>
      
      <input
      name="color"
      value={color}
      placeholder='Color - "Black" or "Blue"'
      onChange={e => setColor(e.target.value)}
      >
      </input>
      <button onClick={submitCategory} >Submit Category</button>
    </div>
  )
}

export default CategoryForm