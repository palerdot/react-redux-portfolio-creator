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
      console.log('calculate if stock is added to portfolio', stockId, stock)
      return stock
    }
  }
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    onStockClick: (stockId, stockPrice) => {
      console.log('dispatching stock click ')
      dispatch(addStockToPortfolio(stockId, stockPrice))
    }
  }
}
 
const StockPicker = connect(
  mapStateToProps,
  mapDispatchToProps
)(StockPickerView)
 
export default StockPicker

