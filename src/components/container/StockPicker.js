import React from 'react'

// redux related
import { connect } from 'react-redux'
// action creators
import { addStockToPortfolio } from '../../actions'

// import our presentation component
import StockPickerView from '../presentation/StockPickerView'

const mapStateToProps = (state) => {
  return {
    stocks: state.stocks
  }
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    onStockClick: (stockId) => {
      console.log('dispatching stock click ', stockId)
      // dispatch(addStockToPortfolio(stockId))
    }
  }
}
 
const StockPicker = connect(
  mapStateToProps,
  mapDispatchToProps
)(StockPickerView)
 
export default StockPicker

