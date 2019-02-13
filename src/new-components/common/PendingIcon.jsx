import React from 'react'
import './common.css'

class PendingIcon extends React.Component {
  render () {
    return (
      <div className='dot-pulse-outer'>
        <div className='dot-pulse-middle'>
          <div className='dot-pulse-inner pulse' />
        </div>
      </div>
    )
  }
}

export default PendingIcon
