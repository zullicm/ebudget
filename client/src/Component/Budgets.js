import React, {useContext, useEffect} from "react";
import { UserContext } from "../Context/user";
import { BudgetsContext } from "../Context/budgets";

function Budgets(){
  const {budgets, setBudgets} = useContext(BudgetsContext)
  const {user, setUser} = useContext(UserContext)

  useEffect(() =>{
    fetch('/budgets')
    .then(res => res.json())
    .then(data => console.log(data))
  },[])


  // useEffect(() =>{
  //   fetch(,{
  //     method: "",
  //     headers: {'Content-Type':'application/json'},
  //     body:JSON.stringify({
  //       user_id: user ? user.id : null
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(data => budgetSetter(data))
  // },[])

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

// fetch('/budgets',{
//   method: "POST",
//   headers: {'Content-Type':'application/json'},
//   body:JSON.stringify({
//     amount: floatAmount,
//     color: color,
//     start_date : start,
//     end_date: end,
//     user_id: user.id
//   })
// })