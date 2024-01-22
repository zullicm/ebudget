import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { plusCount, minusCount } from "../Store/Features/CounterSlice";

function Reduxtest(){
  const [amount, setAmount] = useState(0)
  const dispatch = useDispatch()
  const count = useSelector(state => state.counter.count)

  return(
    <div>
      Count: {count}
      <br/>
      <button onClick={() => dispatch(plusCount())} >+</button>
      <button onClick={() => dispatch(minusCount())} >-</button>
      {/* <input
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      placeholder="By how much"
      ></input> */}
    </div>
  )
}

export default Reduxtest