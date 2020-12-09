export const initialState = {
  basket: [],
}

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0) // reduce is foreach loop

// Reducer is resposible to put/fetch/modify data from Component to data context
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        // ...state means current state
        ...state,
        // Add current ...state.basket, plus new item
        basket: [...state.basket, action.item],
      }
    default:
      return state
  }
}

export default reducer
