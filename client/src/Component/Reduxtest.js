import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { plusCount, minusCount } from "../Redux/Features/CounterSlice";

function Reduxtest(){
  const [amount, setAmount] = useState(0)
  const dispatch = useDispatch()
  const count = useSelector(state => state.counter.count)

  console.log(count)

  return(
    <div>
      Count: {count}
      <br/>
      <button onClick={() => dispatch(plusCount(amount))} >+</button>
      <button onClick={() => dispatch(minusCount(amount))} >-</button>
      <input
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      placeholder="By how much"
      ></input>
    </div>
  )
}

export default Reduxtest