// the reducer function is probably the single most important piece of the redux flow!
// it has to be a PURE function!
// 1) it will NOT mutate its arguments
// 2) from the same input, will always emit the same output
// 3) side-effects (like an API call) are NOT permitted in a pure function

import { ADD_TO_CART, REMOVE_FROM_CART, SET_USERNAME } from '../actions'

// let's think now about our initial state for the redux store!
const initialState = {
  // let's divide our properties and state variable into sub-objects, chunks (slices)
  cart: {
    // we'll put here everything belonging to the cart feature
    content: [],
    error: false,
  },
  user: {
    name: '',
  },
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    // every time you dispatch a new action, you'll have to think
    // on how to HANDLE it! you need a reducer case!
    case ADD_TO_CART:
      return {
        ...state,
        cart: {
          ...state.cart, // this bring in here content and error
          content: [...state.cart.content, action.payload], // action.payload is the new book we're trying to add
          // content: state.cart.content.concat(action.payload), // action.payload is the new book we're trying to add
          // content: state.cart.content.push(action.payload) <-- SUPER BAD, PUSH IS NOT ALLOWED IN A REDUCER
          // because EDITS the state argument (which is forbidden) and returns a number
        },
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: {
          ...state.cart, // this bring in here content and error
          //   content: state.cart.content.filter((book, i) => i !== action.payload),
          content: [
            ...state.cart.content.slice(0, action.payload), // all the elements BEFORE action.payload
            ...state.cart.content.slice(action.payload + 1), // all the elements AFTER action.payload
          ], // hardcore solution but more efficient :)
        },
      }
    case SET_USERNAME:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload,
        },
      }
    default:
      return state
    // the object you're returning from every case
    // is going to be the NEW value for the redux store!
  }
}

export default mainReducer
