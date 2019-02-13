import React from 'react'
import { connect } from 'react-redux'
import { getDeviceOS } from './../../utils'
import { setupPortisWeb3 } from '../../actions/web3'
import NoWalletPageDesktop from './../dumb/pages/NoWalletPageDesktop'
import NoWalletPageMobile from './../dumb/pages/NoWalletPageMobile'
const qs = require('querystring')

const NoWalletPage = ({ setupPortisWeb3, location }) => {
  if (window.innerWidth < 769) {
    // parse url params
    const queryParams = qs.parse(location.search.substring(1))
    const walletId = (queryParams.wallet || queryParams.w)
    const os = getDeviceOS()
    return <NoWalletPageMobile deviceOS={os} walletId={walletId} showPortisModal={setupPortisWeb3} />
  }
  return <NoWalletPageDesktop showPortisModal={setupPortisWeb3} />
}

export default connect(null, { setupPortisWeb3 })(NoWalletPage)
