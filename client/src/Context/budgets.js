import React, { useEffect, useState } from "react";
const BudgetsContext = React.createContext();


function BudgetsProvider({ children }) {
  const [budgets, setBudgets] = useState([])

  useEffect(() =>{
    fetch('/budgets')
    .then(res => res.json())
    .then(data => setBudgets(data))
  },[])

  return (
    <BudgetsContext.Provider value={{ budgets, setBudgets }}>
      {children}
    </BudgetsContext.Provider>
  );
}

export { BudgetsContext, BudgetsProvider };