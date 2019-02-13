import React from 'react'
import RetinaImage from 'react-retina-image'
import './common.css'

class Header extends React.Component {
  render () {
    return (
      <div className='header'>
        <RetinaImage
          src={`https://raw.githubusercontent.com/VolcaTech/eth2-assets/master/images/dada-logo.png`} />
      </div>
    )
  }
}

export default Header
