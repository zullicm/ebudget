import React, { useState, useContext } from "react";
import { UserContext } from "../Context/user";
import { BudgetsContext } from "../Context/budgets";


function BudgetForm(){
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
      <p>Budget Amount {parseFloat(amount.replace(/,/g, '')) ? <p></p> : <p>Must be a number</p> }</p>
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



  // :amount, :color, :start_date, :end_date, :user_id
  // for now start and end date will look like this "03/23/2023" and will change once calender component is created

  // parseFloat(amount.replace(/,/g, '') HOW TO CREATE NUM