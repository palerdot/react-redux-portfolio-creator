// portfolio component
import React from 'react'

// css related imports
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'

class PortfolioView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  // helper function to display portfolio
  _renderPortFolio() {
    return this.props.portfolio.map((p) => {
      return (
        <TableRow key={p.id}>
          <TableCell>{p.id}</TableCell>
          <TableCell numeric>{p.price}</TableCell>
          <TableCell>{p.shares}</TableCell>
        </TableRow>
      );
    })
  }

  render() {
    return (
      <div>
        Porumai! Portfolio component
        <Grid container spacing={24} style={{padding: "17px"}}>
          <Grid item xs={6}>
            <Paper>
              <Table fixedHeader={false} style={{ tableLayout: "auto" }}>
                <TableHead>
                  <TableRow className="pf-header">
                    <TableCell className="pf-h-value">id</TableCell>
                    <TableCell numeric className="pf-h-value">price</TableCell>
                    <TableCell numeric className="pf-h-value">share</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this._renderPortFolio()}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default PortfolioView