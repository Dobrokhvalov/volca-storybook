import React from 'react'

import ButtonPrimary from './../../common/ButtonPrimary'
import WalletSlider from '../../NotConnectedScreens/WalletSlider'
import { ButtonLoader } from './../../common/Spinner'
import styles from '../../NotConnectedScreens/styles'
import wallets from '../../NotConnectedScreens/wallets'

import PageContainer from '../common/PageContainer'
import copy from 'copy-to-clipboard'

class NoWalletPageMobile extends React.Component {
  constructor (props) {
    super(props)

    let selectedWallet

    // if wallet is supported by devices OS

    const wallet = wallets[this.props.walletId]
    if (wallet && wallet.mobile && wallet.mobile[this.props.deviceOS] &&
        wallet.mobile[this.props.deviceOS].support === true) {
      selectedWallet = wallet
    } else {
      selectedWallet = wallets.trust
    }

    this.state = {
      selectedWallet,
      disabled: true,
      showCarousel: false,
      showInstruction: false,
      showSlider: true,
      trustWalletInLink: false,
      fetchingPortis: false
    }
  }
  
  _renderWithDeepLink (deepLink) {
    const walletIcon = `https://raw.githubusercontent.com/Eth2io/eth2-assets/master/images/${this.state.selectedWallet.id}.png`

    return (
      <div style={{ paddingBottom: 20 }}>
        <div><img src={walletIcon} style={styles.largeWalletIcon} /></div>
        <div style={{ ...styles.title }}>
          You need a wallet to <br /> claim
          { this.state.amount && this.state.token
            ? <span style={styles.amountSymbol}> {this.state.amount} {this.state.token}</span>
            : <span> tokens</span>
          }
        </div>
        <Instructions wallet={this.state.selectedWallet} isDeepLink os={this.props.deviceOS} />
        { this.state.selectedWallet.id === 'portis'
          ? <a style={styles.button} className='blue-button hover' onClick={this._openPortisModal.bind(this)}>
            {this.state.fetchingPortis ? <ButtonLoader /> : 'Use Portis'}
          </a>
          : <a href={deepLink} style={styles.button} className='blue-button' target='_blank'> Use {this.state.selectedWallet.name} </a>
        }

        { this._renderSlider() }
      </div>
    )
  }

  _renderSlider () {
    if (!this.state.showSlider) { return null }
    return (
      <div>
        {
          this.state.showCarousel
            ? <WalletSlider selectWallet={this._selectWallet.bind(this)}
              deviceOS={this.props.deviceOS}
              selectedWallet={this.state.selectedWallet} />
            : <div style={styles.anotherWallet} onClick={() => this.setState({ showCarousel: true, showInstruction: false })}>Have another wallet?</div>
        }

      </div>
    )
  }

  _renderWithoutDeepLink (link) {
    const walletIcon = `https://raw.githubusercontent.com/Eth2io/eth2-assets/master/images/${this.state.selectedWallet.id}.png`

    // #TODO add this screen
    return (
      <div style={{ paddingBottom: 20 }}>
        <div><img src={walletIcon} style={styles.largeWalletIcon} /></div>
        <div style={{ ...styles.title, marginTop: 30, marginBottom: 40 }}>How to claim tokens <br />to {this.state.selectedWallet.name}</div>
        <Instructions wallet={this.state.selectedWallet} isDeepLink={false} />
        <div style={styles.buttonContainer}>
          <ButtonPrimary
            handleClick={() => {
              // copy current location link to clipboard
              copy(window.location.href)
              window.alert('The link is copied to your clipboard.')
            }}
            textColor='#0078FF' buttonColor='rgba(0, 153, 255, 0.2)' className='light-blue-button'>Copy Link</ButtonPrimary>
        </div>
        { this._renderSlider() }
      </div>
    )
  }

  _getDeepLink () {
    // const dappUrl = encodeURIComponent(window.location);
    const dappUrl = String(window.location)
    const wallet = this.state.selectedWallet

    // if wallet is supported by devices OS
    if (!(wallet.mobile[this.props.deviceOS] &&
            wallet.mobile[this.props.deviceOS].support === true &&
            wallet.mobile[this.props.deviceOS].deepLink !== null)) {
      return { link: wallet.walletURL, isDeepLink: false }
    }

    return { link: wallet.mobile[this.props.deviceOS].deepLink(dappUrl), isDeepLink: true }
  }

  _selectWallet (walletName) {
    const wallet = wallets[walletName]
    this.setState({
      selectedWallet: wallet,
      showInstruction: true,
      showCarousel: false
    })
  }
  
  _renderForMobile () {
    const { link, isDeepLink } = this._getDeepLink()

    // if there is deep link for the wallet for the device OS
    if (isDeepLink) {
      return this._renderWithDeepLink(link)
    }

    // if there is NO deep link
    return this._renderWithoutDeepLink(link)
  }

  _openPortisModal () {
    this.setState({ fetchingPortis: true })
    setTimeout(async () => { // let UI update
      console.log('openning modal')
      await this.props.setupPortisWeb3()
      this.setState({ fetchingPortis: false })
    }, 0)
  }

  render () {
    return (
      <PageContainer>
        { this._renderForMobile() }
      </PageContainer>
    )
  }
}

const Instructions = ({ wallet, isDeepLink, os }) => {
  if (wallet.id === 'portis') {
    return null
  }

  return (
    <div>
      <div style={styles.instructionsContainer}>
        <div style={styles.instructionsText}> 1. Download  <a href={wallet.walletURL} style={{ color: '#0099ff', textDecoration: 'none' }}>{wallet.name}</a></div>
        {isDeepLink
          ? <div style={styles.instructionsText}>2. Return here and press the button below:</div>
          : <div style={styles.instructionsText}>2. Copy&Paste the claiming link in the {wallet.name} DApp browser</div>}
      </div>
    </div>
  )
}

export default NoWalletPageMobile
