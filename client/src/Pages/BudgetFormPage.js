import React, {useContext} from "react";
import BudgetForm from "../Component/BudgetForm";
import Budgets from "../Component/Budgets";
import { UserContext } from "../Context/user";

function BudgetFormPage(){
const {user, setUser} = useContext(UserContext)

  return(
    <div>
      {user ? <BudgetForm /> : <p>Please Login to create budget</p>}
      <Budgets />
    </div>
  )
}

export default BudgetFormPage