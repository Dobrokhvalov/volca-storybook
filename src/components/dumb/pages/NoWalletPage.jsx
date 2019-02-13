import React from 'react'
import RetinaImage from 'react-retina-image'
import ButtonPrimary from './../common/ButtonPrimary'
import WalletSlider from './WalletSlider'
import { ButtonLoader } from './../common/Spinner'
import { getDeviceOS } from './../../utils'
import copy from 'copy-to-clipboard'
import PoweredByVolca from './../common/poweredByVolca'
import { setupPortisWeb3 } from '../../actions/web3'
const qs = require('querystring')

class NoWalletScreen extends React.Component {

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
        <Instructions wallet={this.state.selectedWallet} isDeepLink os={this.os} />
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
            ? <WalletSlider selectWallet={this._selectWallet.bind(this)} selectedWallet={this.state.selectedWallet} />

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
              alert('The link is copied to your clipboard.')
            }}
            textColor='#0078FF' buttonColor='rgba(0, 153, 255, 0.2)' className='light-blue-button'>Copy Link</ButtonPrimary>
        </div>
        {
          this.state.showCarousel === true
            ? <WalletSlider selectWallet={this._selectWallet.bind(this)} selectedWallet={this.state.selectedWallet} />
            : <div style={styles.anotherWallet} onClick={() => this.setState({ showCarousel: true, showInstruction: false })}>Have another wallet?</div>
        }
      </div>
    )
  }

  _openPortisModal () {
    this.setState({ fetchingPortis: true })
    setTimeout(async () => { // let UI update
	    console.log('openning modal')
	    await this.props.setupPortisWeb3()
	    this.setState({ fetchingPortis: false })
    }, 0)
  }

  _renderForDesktop () {
    return (
      <div style={{ height: window.innerHeight - 74, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div><img src={'https://raw.githubusercontent.com/Eth2io/eth2-assets/master/images/attention_icon.png'} style={styles.largeWalletIcon} /></div>
          <div style={{ ...styles.title }}>You need a wallet to<br />claim tokens</div>

          <div style={styles.buttonRow}>
            <a className='hover' style={{ ...styles.button, backgroundColor: '#6CB3DB', borderColor: '#6CB3DB' }} onClick={this._openPortisModal.bind(this)}>
              {this.state.fetchingPortis ? <ButtonLoader /> : 'Use Portis'}
            </a>
          </div>

          <div style={styles.buttonRow}>
            <a href='https://metamask.io/' style={{ ...styles.button, backgroundColor: '#f5a623', borderColor: '#f5a623' }} target='_blank'>Use Metamask</a>
          </div>
          <div style={styles.instructionsContainer}>
            <div style={styles.howtoTitle}>How to:</div>
            <div style={styles.instructionsText}> 1. Install/Open <a href='https://metamask.io/' style={{ color: '#0099ff', textDecoration: 'none' }}>Metamask Chrome Extension</a></div>
            <div style={styles.instructionsText}> 2. Create new or import existing wallet </div>
            <div style={styles.instructionsText}> 3. Reload claim page or click again on claiming link and follow simple instructions</div>
          </div>
        </div>
        <PoweredByVolca style={{ alignSelf: 'flex-end' }} />
      </div>
    )
  }

  render () {
    if (this.state.trustWalletInLink) {
	    return this._renderForMobile()
    }

    return window.innerWidth < 769 ? this._renderForMobile() : this._renderForDesktop()
  }
}

const Instructions = ({ wallet, isDeepLink, os }) => {
  const walletId = wallet.id
  if (wallet.id === 'portis') {
    return null
  }

  return (
    <div>
      <div style={styles.instructionsContainer}>
        <div style={styles.instructionsText}> 1. Download  <a href={wallets[walletId].walletURL} style={{ color: '#0099ff', textDecoration: 'none' }}>{wallet.name}</a></div>
        {isDeepLink
          ? <div style={styles.instructionsText}>2. Return here and press the button below:</div>
		    : <div style={styles.instructionsText}>2. Copy&Paste the claiming link in the {wallet.name} DApp browser</div>}
      </div>
    </div>
  )
}

export default connect(null, { setupPortisWeb3 })(NoWalletScreen)
