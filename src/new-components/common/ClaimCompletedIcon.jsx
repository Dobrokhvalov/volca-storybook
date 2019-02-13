import React, { Component } from 'react'
import RetinaImage from 'react-retina-image'
import './common.css'

class ClaimCompletedIcon extends React.Component {
  render () {
    return (
      <RetinaImage
        className='claim-completed-icon'
        src={`https://eth2.io/images/done.png`} />
    )
  }
}

export default ClaimCompletedIcon
