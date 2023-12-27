import React, { useEffect, useState } from "react";
const BudgetsContext = React.createContext();


function BudgetsProvider({ children }) {
  const [budgets, setBudgets] = useState([])

  useEffect(() =>{
    fetch('/budgets')
    .then(r =>{
      if(r.ok){
        r.json().then(data => setBudgets(data))
      }else{
        r.json().then(e => console.log(e))
      }
    })
  },[])

  return (
    <BudgetsContext.Provider value={{ budgets, setBudgets }}>
      {children}
    </BudgetsContext.Provider>
  );
}

export { BudgetsContext, BudgetsProvider };


// .then(r => {
//   if(r.ok){
//     r.json().then(data => setBudgets(data))
//   }else{
//     r.json().then(e => console.log(e))
//   }
// })