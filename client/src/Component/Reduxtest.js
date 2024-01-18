import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { plusCount, minusCount } from "../Store/Features/CounterSlice";

function Reduxtest(){
  const [amount, setAmount] = useState(0)
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  function addCount(){
    dispatch(plusCount(amount))
  }

  return(
    <div>
      Count: {count}
      <br/>
      <button onClick={addCount} >+</button>
      <button>-</button>
      <input
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      placeholder="By how much"
      ></input>
    </div>
  )
}

export default Reduxtest