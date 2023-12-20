import React, { useEffect, useState } from "react";
const BudgetsContext = React.createContext();


function BudgetsProvider({ children }) {
  const [budgets, setBudgets] = useState(null)


  return (
    <BudgetsContext.Provider value={{ budgets, setBudgets }}>
      {children}
    </BudgetsContext.Provider>
  );
}

export { BudgetsContext, BudgetsProvider };