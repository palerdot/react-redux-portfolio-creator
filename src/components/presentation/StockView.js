// view to show single stock
import React from 'react'

import Grid from 'material-ui/Grid'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

class StockView extends React.Component {
  render() {
    return (
      <Grid item xs={3}>
        <Card>
          <CardContent>
            <Grid container spacing={8}>
              <Grid item xs={8} style={{
                textAlign: 'left'
              }}>
                <Typography variant="subheading" gutterBottom style={{color: '#666666'}}>
                  {this.props.stockId}
                </Typography>
                <Typography variant="body2" gutterBottom style={{color: '#89A6EC'}}>
                  Financial services
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="headline" gutterBottom style={{color: '#666666'}}>
                  {this.props.stockPrice}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    )
  }
}

export default StockView