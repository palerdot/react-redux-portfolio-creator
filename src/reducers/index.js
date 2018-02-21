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
  // for now just return the state
  return state
}

// OVERALL REDUCER (to be exported)
// we are explicitly not using combineReducers to have better visibility of what is going on
export default function portFolioApp(state = {}, action) {
  return {
    stocks: stocksReducer(state.stocks, action),
    portfolio: portFolioReducer(state.portfolio, action)
  }
}