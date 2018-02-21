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
    console.log('initing stockpicker ', props)
  }

  // helper function to render stocks
  _renderStocks() {
    let stockIds = _.keys(this.props.stocks)
    // for demo purposes we will be using only the first 8 values
    stockIds = _.take(stockIds, 8)
    console.log('rendering stocks ', stockIds)
    // let us display the stocks
    return stockIds.map((stockId) => (
      <StockView 
        stockId={stockId} key={stockId} 
        stockPrice={this.props.stocks[stockId]}
      />
    ))
  }

  render() {
    return (
      <div>
        <Grid container spacing={24} style={{padding: "17px"}}>
          {this._renderStocks()}
        </Grid>
      </div>
    )
  }
}

export default StockPickerView