// component to pick share
import React from 'react'

import Grid from 'material-ui/Grid'

class StatisticsView extends React.Component {

	render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={12}>Stocks</Grid>
                <Grid item xs={12}>{this.props.total_stocks}</Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={12}>Net Worth</Grid>
                <Grid item xs={12}>{this.props.net_worth}</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={12}>P/E Ratio</Grid>
                <Grid item xs={12}>{this.props.p_to_e}</Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={12}>P/B Ratio</Grid>
                <Grid item xs={12}>N/A</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }

}

export default StatisticsView