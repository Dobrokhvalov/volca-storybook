import React from 'react'
import { connect } from 'react-redux'
import { getDeviceOS } from './../../utils'
import { setupPortisWeb3 } from '../../actions/web3'
import NoWalletPageDesktop from './../dumb/pages/NoWalletPageDesktop'
import NoWalletPageMobile from './../dumb/pages/NoWalletPageMobile'
import IntroPage from './../dumb/pages/ClaimPage'
const qs = require('querystring')

class NoWalletPage extends React.Component {
  state = {
    page: 'intro'
  }
  
  _renderRedirectPage () {
    if (window.innerWidth < 769) {
      // parse url params
      const queryParams = qs.parse(this.props.location.search.substring(1))
      const walletId = (queryParams.wallet || queryParams.w)
      const os = getDeviceOS()
      return <NoWalletPageMobile deviceOS={os} walletId={walletId} showPortisModal={this.props.setupPortisWeb3} />
    }
    return <NoWalletPageDesktop showPortisModal={this.props.setupPortisWeb3} />
  }

  render () {
    if (this.state.page === 'intro') {
      return <IntroPage onSubmit={() => this.setState({ page: 'redirect' })} /> 
    } 
    return this._renderRedirectPage()
  }
}



export default connect(null, { setupPortisWeb3 })(NoWalletPage)
