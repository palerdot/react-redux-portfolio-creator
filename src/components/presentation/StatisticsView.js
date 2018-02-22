// component to pick share
import React from 'react'

import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'

class StatisticsView extends React.Component {

	render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={12} style={{fontSize: '16px', color: '#287DCE', textAlign: 'left'}}>Stocks</Grid>
                <Grid item xs={12} style={{fontSize: '28px', color: '#222222', lineHeight: '26px', textAlign: 'left'}}>
                    {this.props.total_stocks}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={12} style={{fontSize: '16px', color: '#287DCE', textAlign: 'left'}}>Net Worth</Grid>
                <Grid item xs={12} style={{fontSize: '28px', color: '#222222', lineHeight: '26px', textAlign: 'left'}}>{this.props.net_worth}</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={12} style={{fontSize: '16px', color: '#287DCE', textAlign: 'left'}}>P/E Ratio</Grid>
                <Grid item xs={12} style={{fontSize: '28px', color: '#222222', lineHeight: '26px', textAlign: 'left'}}>{this.props.p_to_e}</Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={12} style={{fontSize: '16px', color: '#287DCE', textAlign: 'left'}}>P/B Ratio</Grid>
                <Grid item xs={12} style={{fontSize: '28px', color: '#222222', lineHeight: '26px', textAlign: 'left'}}>N/A</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button variant="raised" className="build-button">
            BUILD PORTFOLIO
          </Button>
        </Grid>
      </Grid>
    )
  }

}

export default StatisticsView