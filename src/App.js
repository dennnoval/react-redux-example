import React from 'react'
import './App.css'
import logo512 from './res/logo512.png'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Action
const BUY_CAKE = 'BUY_CAKE'
const buyCake = () => { type: BUY_CAKE }

// State
const initialState = {
  numOfCakes: 10
}

// Reducer
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: return { ...state, numberOfCakes: state.numOfCakes - 1 }
    default: return state
  }
}

// Store
const store = createStore(cakeReducer)

function App () {
  return (
    <Provider store={store}>
      <div>
        <img src={logo512} width='240'/>
        <h2>Cake Shop</h2>
        <p>Number of Cakes</p>
        <br/>
        <h3></h3>
      </div>
    </Provider>
  )
}

export default App
