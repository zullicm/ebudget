import React from "react";

function Dates({start,setStart,end,setEnd}){
  
  return(
    <div>
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
    </div>
  )
}

export default Dates