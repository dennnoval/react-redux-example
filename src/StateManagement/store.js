import { createStore } from 'redux'

// State
const initialState = {
  numOfCakes: 10
}

// Reducer
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BUY_CAKE': return { ...state, numberOfCakes: state.numOfCakes - 1 }
    default: return state
  }
}

// Store
const store = createStore(cakeReducer)

export default store
