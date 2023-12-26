import React, { useState, useContext } from "react";
import { UserContext } from "../Context/user";
import { BudgetsContext } from "../Context/budgets";


function BudgetForm(){
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [color, setColor] = useState('')
  const [start, setStart] = useState('')
  const [end , setEnd] = useState('')
  const {user, setUser} = useContext(UserContext)
  const {budgets, setBudgets} = useContext(BudgetsContext)
  
  function submitBudget(){
    const floatAmount = parseFloat(amount.replace(/,/g, ''))
    fetch('/budgets',{
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify({
        name: name,
        amount: floatAmount,
        color: color,
        start_date : start,
        end_date: end,
        user_id: user.id
      })
    })
    .then(r => {
      if(r.ok){
        r.json().then(data => setBudgets(data))
      }else{
        r.json().then(e => console.log(e))
      }
    })
  }


  return(
    <div className="form budget-form">
      <p>Budget name</p>
      <input
      name="name"
      value={name}
      placeholder="Monthly Budget / Vaction"
      onChange={e => setName(e.target.value)}
      >
      </input>
      <br/>
        <p>Budget Amount</p>
      <input
      name="amount"
      value={amount}
      placeholder="Must Be a Number - eg. 15,000"
      onChange={e => setAmount(e.target.value)}
      >
      </input>
      <input
      name="color"
      value={color}
      placeholder='Color - "Black" or "Blue"'
      onChange={e => setColor(e.target.value)}
      >
      </input>
      <br/>
      <p>Format Start and end date as such "03/23/2022"</p>
      <input
      name="start"
      value={start}
      placeholder="Start Date"
      onChange={e => setStart(e.target.value)}
      >
      </input>
      <input
      name="end"
      placeholder="End Date"
      value={end}
      onChange={e => setEnd(e.target.value)}
      >
      </input>
      <button onClick={submitBudget} >Submit Budget</button>
      <button onClick={()=>console.log(budgets)}>BUDGETS</button>
    </div>
  )
}

export default BudgetForm
