// list of actions to act on our state/store

// action types
export const ADD_STOCK_TO_PORTFOLIO = 'ADD_STOCK_TO_PORTFOLIO'
export const POPULATE_STOCKS = 'POPULATE_STOCKS'
const UPDATE_SHARE_COUNT = 'UPDATE_SHARE_COUNT'

// action creators

// populate stocks (our initial stock list)
export const populateStockList = (stockList) => {
  return {
    type: POPULATE_STOCKS,
    stockList: stockList
  }
}

// adds particular stock to portfolio
export const addStockToPortfolio = (stockId, stockPrice) => {
  return {
    type: ADD_STOCK_TO_PORTFOLIO,
    id: stockId,
    price: stockPrice
  }
}

// updates share count
export const updateShareCount = (id, count) => {
  return {
    type: UPDATE_SHARE_COUNT,
    id: id,
    count: count
  }
}
