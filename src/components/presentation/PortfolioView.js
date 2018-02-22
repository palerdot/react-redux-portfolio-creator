// portfolio component
import React from 'react'

import _ from 'lodash'

// css related imports
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import Icon from 'material-ui/Icon'

// custom components
import SharePicker from './SharePicker'
import OverviewGraph from '../container/OverviewGraph'
import Statistics from '../container/Statistics'

class PortfolioView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  // helper function to compute network
  computeNetWorth() {
    let portfolio = this.props.portfolio
    // initial net worth is 0
    let net_worth = 0
    _.each(portfolio, (pf) => {
      net_worth = net_worth + (pf.price * pf.shares)
    })
    // let us loop through and calculate
    return net_worth
  }

  // compute weight of each stock
  computeWeight(price, shares) {
    let net_worth = this.computeNetWorth()
    // final weight
    let weight = (price * shares)/net_worth

    return weight ? ((weight * 100).toFixed(2) + '%') : '0'
  }

  // helper function to display portfolio
  _renderPortFolio() {
    return this.props.portfolio.map((p) => {
      return (
        <TableRow key={p.id}>
          <TableCell style={{fontSize: '14px', color: '#287DCE', lineHeight: '16px'}}>{p.id}</TableCell>
          <TableCell numeric>{p.price}</TableCell>
          <TableCell>
            <SharePicker 
              id={p.id}
              shares={p.shares}
              updateShareCount={this.props.updateShareCount} 
            />
          </TableCell>
          <TableCell numeric>{this.computeWeight(p.price, p.shares)}</TableCell>
          <TableCell numeric>
            <Icon style={{color: '#FF7C7C', cursor: 'pointer', fontSize: '18px'}}
              onClick={() => {
                this.props.removeStockFromPortfolio(p.id)
              }}
            >remove_circle</Icon>  
          </TableCell>
        </TableRow>
      );
    })
  }

  render() {
    return (
      <div>

        <div style={{textAlign: 'left', margin: '29px'}}>
          <span className="info-label manage-portfolio-info-label">MANAGE PORTFOLIO</span>
        </div>

        <Grid container spacing={16} style={{padding: "7px 29px"}}>
          <Grid item xs={6}>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow className="pf-header">
                    <TableCell className="pf-h-value">STOCK</TableCell>
                    <TableCell numeric className="pf-h-value">PRICE</TableCell>
                    <TableCell numeric className="pf-h-value">SHARE</TableCell>
                    <TableCell numeric className="pf-h-value">WEIGHT</TableCell>
                    <TableCell numeric className="pf-h-value"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this._renderPortFolio()}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <OverviewGraph />
          </Grid>
          <Grid item xs={3} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Statistics />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default PortfolioView