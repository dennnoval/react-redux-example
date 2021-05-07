import React, { useState } from 'react'
import './App.css'
import logo512 from './res/logo512.png'

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './StateManagement/counterSlice'

function App () {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('0')
  const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
      <img src={logo512} width='128'/>
      <h2>Counter</h2>
      <p>Count : {count}</p>
      <br/>
      <button type='button' onClick={() => dispatch(decrement())}>-</button>
      <button type='button' onClick={() => dispatch(increment())}>+</button>
      <br/>
      <input type='text' value={incrementAmount} onChange={(e) => dispatch(setIncrementAmount(e.target.value))}/>
      <button type='button' onClick={() => dispatch(incrementByAmount(incrementValue))}>Ok</button>
    </div>
  )
}

export default App
