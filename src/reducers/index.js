// define the reducers that changes the state tree based on the dispatched actions

// let us define our initial state
const initialState = {
	stocks: {},
  portfolio: []
}

// individual reducers
// splits and acts on relevant part of the state tree

// stocks reducer
// an object with list of stock ids as key, and its price as value
function stocksReducer(state = {}, action) {
  switch (action.type) {
    case 'POPULATE_STOCKS':
      // populates given set of stocks to our state
      // just replaces our stock list with the new list
      console.log('porumai! reducing new stock list?? ', action)
      return action.stockList
    default:
      return state
  }
}

// portfolio reducer
function portFolioReducer(state=[], action) {
  switch (action.type) {
    // adds particular stock to portfolio
    case 'ADD_STOCK_TO_PORTFOLIO':
      return [
        ...state,
        {
          id: action.id,
          price: action.price,
          shares: 1
        }
      ]

    // removes stock with particular id from the portfolio
    case 'REMOVE_STOCK_FROM_PORTFOLIO':
      // just return all the stocks which does not have our id
      return state.filter((p) => {
        return p.id !== action.id
      })

    // updates share count of particular portfolio
    case 'UPDATE_SHARE_COUNT':
      // first going through all our shares
      let updated_portfolio = state.map((s) => {
        // if we have encountered our share, just update share
        return (s.id === action.id) 
          ? {...s, shares: action.count}
          : s
      })
      return updated_portfolio

      // no ops; return default state
    default:
      return state
  }
}

// OVERALL REDUCER (to be exported)
// we are explicitly not using combineReducers to have better visibility of what is going on
export default function portFolioApp(state = {}, action) {
  return {
    stocks: stocksReducer(state.stocks, action),
    portfolio: portFolioReducer(state.portfolio, action)
  }
}