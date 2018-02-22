import React from 'react'

// redux related
import { connect } from 'react-redux'
// action creators
import { addStockToPortfolio } from '../../actions'

// import our presentation component
import StockPickerView from '../presentation/StockPickerView'

const mapStateToProps = (state) => {
  return {
    stocks: state.stocks,
    // helper state to find out if the stock is added to portfolio
    isStockAdded: (stockId) => {
      let stock = state.portfolio.find((s) => {
        return s.id === stockId
      })
      return stock
    }
  }
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    onStockClick: (stockId, stockPrice) => {
      dispatch(addStockToPortfolio(stockId, stockPrice))
    }
  }
}
 
const StockPicker = connect(
  mapStateToProps,
  mapDispatchToProps
)(StockPickerView)
 
export default StockPicker

