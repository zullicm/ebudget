import React, {useState} from "react";

function Budget({budget}){
  const {name, amount, color, start_date, end_date, user_id} = budget
  console.log(budget)
  return(
    <div>
      {name}
    </div>
  )
}

export default Budget
