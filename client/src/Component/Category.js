import React from "react";

function Category(){

  return(
    <div>
      <div className="budget">
      <p>{name}</p>
      <p>{color}</p>
      <p>Description:</p>
      <br/>
      <p>{description}</p>
      <button onClick={deleteBudget}>Delete Budget</button><br/>
      <button onClick={toBudgetPage}>Budget Page</button>
    </div>
    </div>
  )
}

export default Category