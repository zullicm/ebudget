import React, { useState } from "react";
const BudgetContext = React.createContext();


function BudgetProvider({ children }) {
  const [budget, setBudget] = useState(null)

  return (
    <BudgetContext.Provider value={{ budget, setBudget }}>
      {children}
    </BudgetContext.Provider>
  );
}

export { BudgetContext, BudgetProvider };