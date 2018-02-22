// overview graph to map state from redux
import React from 'react'

import _ from 'lodash'
// redux related
import { connect } from 'react-redux'

// component to connect
import OverviewGraphView from '../presentation/OverviewGraphView'

// get historical data
import data from '../../data/data.json'

// helper function to calculate historical net worth for the selected portfolio
function computeHistoricalNetWorth(dates, portfolio) {
  let history_data = data.historical
  // for the given dates
  let historical_net_worth = _.map(dates, (d) => {
    let historical_weight = 0
    // go through the portfolio
    _.each(portfolio, (p) => {
      let history_points = history_data[p.id].point
      let shares = p.shares
      let historical_price = _.find(history_points, (h) => {
        return h.date === d
      })
      // DATA is patchy; if price is not present return a default price
      historical_price = historical_price ? historical_price.price : 100
      historical_weight = historical_weight + (historical_price * shares)
    })
    return historical_weight
  })

  // return [33, 22, 11, 22, 33]
  return historical_net_worth
}

const mapStateToProps = (state) => {
  return {
    historical_net_worth_data: (dates) => {
      return computeHistoricalNetWorth(dates, state.portfolio)
    }
  }
}

// no action will be dispatched 
const mapDispatchToProps = (dispatch) => {
  return {}
}

const OverviewGraph = connect(
  mapStateToProps,
  mapDispatchToProps
)(OverviewGraphView)

export default OverviewGraph