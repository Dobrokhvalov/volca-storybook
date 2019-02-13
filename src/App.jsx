import React, { Component } from 'react'
import { connect } from 'react-redux'
import web3Service from './services/web3Service'
// import ClaimScreen from './components/ClaimScreen/ClaimScreen'
import ClaimNFTScreen from './components/ClaimScreen/ClaimNFTScreen'
// import AuthScreen from './components/AuthScreen/AuthScreen'
import TransferComponent from './components/Transfer'
import Header from './components/common/Header/ReferalHeader'
import { Loader } from './components/common/Spinner'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import NoWalletScreen from './components/NotConnectedScreens/NoWalletScreen'
import UnsupportedNetwork from './components/NotConnectedScreens/UnsupportedNetwork'
import ReactGA from 'react-ga'

// initialize google analytics
ReactGA.initialize('UA-126363137-2')

class App extends Component {
  _renderWrongNetwork () {
    return (
      <div>
        <Header {...this.props} />
        <UnsupportedNetwork />
      </div>
    )
  }

  _renderNoWalletScreen () {
    console.log('this.props', this.props)
    return (
      <Router>
        <div>
          <Switch>
            <Route render={
              (props) => {
                return (
                  <div>
                    <Header {...this.props} />
                    <NoWalletScreen {...this.props} {...props} />
                  </div>
                )
              }
            } />
          </Switch>

        </div>
      </Router>

    )
  }

  render () {
    const path = window.location.hash
    const isAuthScreen = path.includes('/auth')
    if (!this.props.loaded) {
      return (<Loader />)
    }

    // auth screen doesn't need web3 to be connected
    if (!isAuthScreen) {
      if (!this.props.connected || !this.props.address) {
        return this._renderNoWalletScreen()
      }

      if (String(this.props.networkId) !== '3' &&
          String(this.props.networkId) !== '1'
      ) {
        return this._renderWrongNetwork()
      }
    }

    const web3 = web3Service.getWeb3()
    // hack to forse using Trust Wallet
    const hasWalletInLink = window.location.href.search('w=trust') > 0

    if (hasWalletInLink && !web3.currentProvider.isTrust) {
      return this._renderNoWalletScreen()
    }

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/transfers/:transferId' component={TransferComponent} />
               <Route path='/receive-nft' component={ClaimNFTScreen} />
               <Route path='/r' render={
              (props) => {
                return (
                  <Redirect to={{
                    pathname: '/receive-nft',
                    search: props.location.search
                  }} />
                )
              }
            } />

            <Route render={
              (props) => {
                window.location.replace('https://volca.tech')
              }
            } />
          </Switch>

        </div>
      </Router>

    )
  }
}

function mapStateToProps (state) {
  let balance
  const web3 = web3Service.getWeb3()
  if (state.web3Data.balance) {
    balance = web3.fromWei(state.web3Data.balance, 'ether').toNumber()
  }
  return {
    address: state.web3Data.address,
    balance,
    connected: state.web3Data.connected,
    networkId: state.web3Data.networkId,
    networkName: state.web3Data.networkName,
    loaded: state.web3Data.loaded
  }
}

export default connect(mapStateToProps)(App)
