// component to pick share
import React from 'react'

import Icon from 'material-ui/Icon'
import Grid from 'material-ui/Grid'

class SharePicker extends React.Component {

  // helper functions
  incrementShareCount() {
    // calculate the new count
    let count = this.props.shares + 1
    // call the update share count
    this.props.updateShareCount(this.props.id, count)
  }

  decrementShareCount() {
    // reduce the count
    let count = this.props.shares - 1
    // if count is less than 1 let us fix at 1
    if (count < 1) {
      count = 1
    }
    // call the update share count
    this.props.updateShareCount(this.props.id, count)
  }

	render() {
    return (
      <Grid container>
        <Grid item xs={4}>
          <Icon style={{color: '#00A9D2', cursor: 'pointer'}}
            onClick={() => this.incrementShareCount()}
          >add</Icon>  
        </Grid>
        <Grid item xs={4} style={{display: 'flex', 'alignItems': 'center', justifyContent: 'center'}}>
          <div className="share-text">{this.props.shares}</div>
        </Grid>
        <Grid item xs={4}>
          <Icon style={{color: '#00A9D2', cursor: 'pointer'}}
            onClick={() => this.decrementShareCount()}
          >remove</Icon>  
        </Grid>
      </Grid>
    )
  }
}

export default SharePicker