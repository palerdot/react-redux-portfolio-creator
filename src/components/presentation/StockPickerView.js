// stock picker view component (presentation)
import React from 'react'

import _ from 'lodash'

import StockView from './StockView'

// css related
import Grid from 'material-ui/Grid'

class StockPickerView extends React.Component {

  constructor(props) {
    super(props)
    // setting state; for now nothing
    this.state = {}
  }

  // helper function to render stocks
  _renderStocks() {
    let stockIds = _.keys(this.props.stocks)
    // for demo purposes we will be using only the first 8 values
    stockIds = _.take(stockIds, 8)
    // let us display the stocks
    return stockIds.map((stockId) => (
      <StockView 
        stockId={stockId} key={stockId} 
        stockPrice={this.props.stocks[stockId]}
        isStockAdded={this.props.isStockAdded(stockId)}
        onStockClick={(stockId, stockPrice) => {
          // before proceeding we have to check if the stock is already is added
          let is_added = this.props.isStockAdded(stockId)
          if (is_added) {
            // do not proceed
            return
          }
          this.props.onStockClick(stockId, stockPrice) 
        }}
      />
    ))
  }

  render() {
    return (
      <div>
        <div style={{textAlign: 'left', margin: '29px'}}>
          <span className="info-label pick-stocks-info-label">PICK STOCKS</span>
        </div>
        <Grid container spacing={16} style={{padding: "7px 29px"}}>
          {this._renderStocks()}
        </Grid>
      </div>
    )
  }
}

export default StockPickerView