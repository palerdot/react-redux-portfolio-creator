import React, { Component } from 'react'

import './App.css'

import { connect } from 'react-redux'
// import action creators
import { populateStockList } from './actions'

// import stock data
import data from './data/data.json'

// import components
import StockPicker from './components/container/StockPicker'
import PortfolioManager from './components/container/PortfolioManager'

class App extends Component {

  // fetch the data from our constructor
  constructor(props) {
    super(props)
    // set the state
    this.state = {
      stockList: data.price
    }
    console.log('initing app ', data)
    this.handlers = this.createHandlers(this.props.dispatch)
    // dispatch action to populate stocks
    this.handlers.populateStocks(this.state.stockList)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">smallcase Portfolio Builder</h1>
        </header>
        <p className="App-intro">
          porumai! will implement portfolio creator
        </p>

        <StockPicker />
        <PortfolioManager />

      </div>
    );
  }

  // handlers section
  createHandlers(dispatch) {
    let populateStocks = function(stockList) {
      console.log('populating stocks ', stockList)
      dispatch( populateStockList(stockList) )
    };

    return {
      populateStocks,
      // other handlers
    }
  }

}

// ref: https://github.com/reactjs/redux/issues/916
// we have to manually dispatch 'POPULATE-STOCKS' (not triggered by any specific event like ajax call, ui interaction etc)
// this is because we have our data in memory

export default connect()(App)
