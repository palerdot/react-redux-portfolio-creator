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
        <Grid item xs={4} style={{display: 'flex', 'alignItems': 'center', justifyContent: 'center', border: '1px solid #DDDDDD'}}>
          <Icon style={{color: '#287DCE', cursor: 'pointer', fontSize: '14px'}}
            onClick={() => this.decrementShareCount()}
          >remove</Icon>  
        </Grid>
        <Grid item xs={4} style={{display: 'flex', 'alignItems': 'center', justifyContent: 'center', border: '0.1px solid #DDDDDD'}}>
          <div className="share-text">{this.props.shares}</div>
        </Grid>
        <Grid item xs={4} style={{display: 'flex', 'alignItems': 'center', justifyContent: 'center', border: '1px solid #DDDDDD'}}>
          <Icon style={{color: '#287DCE', cursor: 'pointer', fontSize: '14px'}}
            onClick={() => this.incrementShareCount()}
          >add</Icon>  
        </Grid>
      </Grid>
    )
  }
}

export default SharePicker