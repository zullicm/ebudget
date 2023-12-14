import React, { useState } from "react";

function BudgetForm(){
  const [amount, setAmount] = useState('')
  

  return(
    <div>
      <p>Budget Amount {parseFloat(amount.replace(/,/g, '')) ? <p></p> : <p>Must be a number</p> }</p>
      
      <input
      name="amount"
      value={amount}
      onChange={e => setAmount(e.target.value)}
      >
      </input>
    </div>
  )
}

export default BudgetForm



  // :amount, :color, :start_date, :end_date, :user_id
  // for now start and end date will look like this "03/23/2023" and will change once calender component is created

  // parseFloat(amount.replace(/,/g, '') HOW TO CREATE NUM