import React from 'react'
import RetinaImage from 'react-retina-image'
import './common.css'

class ClaimCompletedIcon extends React.Component {
  render () {
    return (
      <RetinaImage
        className='claim-completed-icon'
        src={`https://raw.githubusercontent.com/VolcaTech/eth2-assets/master/images/dada-attention.png`} />
    )
  }
}

export default ClaimCompletedIcon
