// portfolio manger component (for connecting with redux)
import React from 'react'

// redux related
import { connect } from 'react-redux'
// component to connect
import PortfolioView from '../presentation/PortfolioView'

const mapStateToProps = (state) => {
  return {
    portfolio: state.portfolio
  }
}
 
const mapDispatchToProps = (dispatch) => {
  return {}
}

const PortfolioManager = connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioView)

export default PortfolioManager