// portfolio manger component (for connecting with redux)
import React from 'react'

// redux related
import { connect } from 'react-redux'

// action creators
import { updateShareCount } from '../../actions'

// component to connect
import PortfolioView from '../presentation/PortfolioView'

const mapStateToProps = (state) => {
  return {
    portfolio: state.portfolio
  }
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    updateShareCount: (id, count) => {
      console.log('porumai! updating share count ', id, count)
      // dispatch action to update count
      dispatch(updateShareCount(id, count))
    }
  }
}

const PortfolioManager = connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioView)

export default PortfolioManager