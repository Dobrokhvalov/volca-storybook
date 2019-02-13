import React, { Component } from 'react'
import RetinaImage from 'react-retina-image'
import './common.css'

class TokenIcon extends React.Component {
    state = {
      imageExists: true
    }

    render () {
      const defaultTokenUrl = 'https://raw.githubusercontent.com/Eth2io/eth2-assets/master/images/default_token.png'
      const tokenUrl = `https://github.com/TrustWallet/tokens/raw/master/tokens/${this.props.tokenAddress}.png`

      return (
        <RetinaImage
          className='token-icon'
          style={{ ...this.props.style }}
          src={this.state.imageExists ? tokenUrl : defaultTokenUrl}
          onError={(e) => { this.setState({ imageExists: false }) }} />
      )
    }
}

export default TokenIcon
