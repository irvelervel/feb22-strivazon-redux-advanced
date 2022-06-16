export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const SET_USERNAME = 'SET_USERNAME'

// here we can write ACTION CREATORS
// wtf is an action creator? is a function returning an action

export const addToCartAction = (bookToAdd) => ({
  type: ADD_TO_CART,
  payload: bookToAdd, // I really want the book object here!
  // the payload is another piece of info, giving the reducer the necessary piece of data
})

// when invoked, the action creator returns the action
// now the components are going to dispatch the action creator instead of the action
// which is less error-prone, and you're avoiding writing manually the action
// (with the type and the payload) every time you want to use it!

export const removeFromCartAction = (indexToRemove) => ({
  type: REMOVE_FROM_CART,
  payload: indexToRemove,
})

export const setUsernameAction = (name) => ({
  type: SET_USERNAME,
  payload: name,
})
