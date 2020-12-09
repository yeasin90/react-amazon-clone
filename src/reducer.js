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
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      )
      // Assing current basket state to temporary variable
      let newBasket = [...state.basket]

      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        // Use `` to append variables inside string
        console.warn(
          `Cant remove product (id: ${action.id} as it's not in basket!`
        )
      }
      return {
        ...state,
        basket: newBasket,
      }
    default:
      return state
  }
}

export default reducer
