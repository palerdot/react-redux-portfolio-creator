// statistics component to communicate with redux state
import React from 'react'

import _ from 'lodash'
// redux related
import { connect } from 'react-redux'

// component to connect
import StatisticsView from '../presentation/StatisticsView'

// import stock data
// we need eps data just for few calculations and no need to really stay in our state tree
import data from '../../data/data.json'

// helper function to calculate the net worth
function computeNetWorth(portfolio) {
  console.log('computing net worth ', portfolio)
  // initial net worth is 0
  let net_worth = 0
  _.each(portfolio, (pf) => {
    net_worth = net_worth + (pf.price * pf.shares)
  })
  // let us loop through and calculate
  return net_worth
}

// helper function to compute P/E
function computePtoE(state) {
  // we need net worth
  let net_worth = computeNetWorth(state.portfolio)
  // we need eps weightage (denominator)
  let eps_weightage = 0
  _.each(state.portfolio, (pf) => {
    // we need the eps value
    let eps_value = data.eps[pf.id]
    eps_weightage = eps_weightage + (eps_value * pf.shares)
  })

  // we have P/E value
  let p_to_e = (net_worth/eps_weightage)

  return p_to_e ? p_to_e.toFixed(2) : 0
}

const mapStateToProps = (state) => {
  return {
    // just compute the stats from our state
    total_stocks: _.size(state.portfolio),
    net_worth: computeNetWorth(state.portfolio),
    p_to_e: computePtoE(state)
  }
}
 
const mapDispatchToProps = (dispatch) => {
  return {}
}

const Statistics = connect(
  mapStateToProps,
  mapDispatchToProps
)(StatisticsView)

export default Statistics