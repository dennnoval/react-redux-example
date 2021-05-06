import React from 'react'
import './App.css'
import logo512 from './res/logo512.png'

import { useSelector } from 'react-redux'

// Action
const buyCake = () => {
  return { type: 'BUY_CAKE' }
}

function App () {
  const numberOfCakes = useSelector(state => state.numOfCakes)
  return (
    <div>
      <img src={logo512} width='240'/>
      <h2>Cake Shop</h2>
      <p>Number of Cakes: {numberOfCakes}</p>
      <br/>
      <button type='button' onClick={() => buyCake()}></button>
    </div>
  )
}

export default App
