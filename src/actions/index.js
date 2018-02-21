// list of actions to act on our state/store

// action types
export const ADD_STOCK_TO_PORTFOLIO = 'ADD_STOCK_TO_PORTFOLIO'
export const POPULATE_STOCKS = 'POPULATE_STOCKS'

// action creators

// populate stocks (our initial stock list)
export const populateStockList = (stockList) => {
  return {
    type: POPULATE_STOCKS,
    stockList: stockList
  }
}

// adds particular stock to portfolio
export const addStockToPortfolio = (stockId) => {
  return {
    type: ADD_STOCK_TO_PORTFOLIO,
    id: stockId
  }
}
