import React, { Component } from 'react'
import { connect } from 'react-redux'
import RetinaImage from 'react-retina-image'
import eth2air from 'eth2air-core'
import ButtonPrimary from './../common/ButtonPrimary'
import { SpinnerOrError, Loader, ButtonLoader } from '../common/Spinner'
import { claimNFT } from '../../actions/transfer'
import web3Service from './../../services/web3Service'
import { getAllTransfers } from './../../data/selectors'
import styles from './styles'
import CompletedReceivedScreen from './../Transfer/CompletedReceivedScreen'
import Header from './../common/Header/ReferalHeader'
import PoweredByVolca from './../common/poweredByVolca'
import ReactGA from 'react-ga'
const qs = require('querystring')

class ClaimScreen extends Component {
  constructor (props) {
    super(props)

    // parse URL params
    const queryParams = qs.parse(props.location.search.substring(1))
    const { c: contractAddress, pk: transitPK,
      r: keyR, s: keyS, v: keyV,
      ref: referralAddress, n: networkId, t: tokenId } = queryParams

    // #ga
    ReactGA.ga('send', 'pageview', '/claim-nft')

    this.state = {
      networkId: (networkId || '1'),
      contractAddress,
      referralAddress,
      transitPK,
      tokenId,
      keyR,
      keyS,
      keyV,
      loading: true,
      errorMessage: '',
      fetching: false,
      tokenSymbol: null,
      tokenAddress: null,
      linkClaimed: false,
      imageExists: true,
      referralAmount: 0
    }
  }

  componentDidMount () {
    this._getAirdropParams()
  }

  async _getAirdropParams () {
    try {
      const web3 = web3Service.getWeb3()

      // hack to show no web3 page, after auth redirect
      if (!web3) {
        window.location.reload()
        return null
      }

      //
      if (String(this.state.networkId) !== String(this.props.networkId)) {
        window.alert("You're connected to wrong network!")
        return null
      }

      const linkClaimed = await eth2air.isLinkClaimed({
        contractAddress: this.state.contractAddress,
        transitPK: this.state.transitPK,
        web3
      })

      console.log(linkClaimed)

      const tokenSymbol = 'Claim NFT'
      const tokenAddress = '0x0x00000'

      // update UI
      this.setState({
        tokenSymbol,
        tokenAddress,
        linkClaimed,
        loading: false
      })
    } catch (err) {
      console.log(err)
      window.alert("Couldn't get airdrop details. Error details in the console.")
    }
  }

  async _onSubmit () {
    // disabling button
    this.setState({ fetching: true })

    try {
      const transfer = await this.props.claimNFT({
        tokenId: this.state.tokenId,
        tokenAddress: this.state.tokenAddress,
        tokenSymbol: this.state.tokenSymbol,
        contractAddress: this.state.contractAddress,
        transitPK: this.state.transitPK,
        keyR: this.state.keyR,
        keyS: this.state.keyS,
        keyV: this.state.keyV
      })
      this.setState({ fetching: false })

      this.props.history.push(`/transfers/${transfer.id}`)
    } catch (err) {
      console.log({ err })
      this.setState({ errorMessage: err.message, fetching: false })
    }
  }

  isPrefixed (str = '') {
    return str.slice(0, 2) === '0x'
  }

  dePrefix (str = '') {
    if (this.isPrefixed(str)) {
      return str.slice(2)
    }
    return str
  }

  _shortAddress (address, num, showEnd = true) {
    const sanitized = this.dePrefix(address)
    const shorten = `${sanitized.slice(0, 3)}...${showEnd ? sanitized.slice(-num) : ''}`
    return '0x'.concat(shorten)
  }

  _renderConfirmDetailsForm () {
    // wait until loaded
    if (this.state.loading) {
      return (<Loader text='Getting airdrop details...' textLeftMarginOffset={-50} />)
    }

    if (this.state.linkClaimed) {
      let transfer
      const cacheTransfer = this.props.cacheTransfers.filter(transfer => transfer.transitPK === this.state.transitPK)[0]
      let isFromCache = false
      if (cacheTransfer) {
        transfer = cacheTransfer
        isFromCache = true
      } else {
        // construct object from url params
        const txHash = null
        const networkId = this.props.networkId
        const amount = this.state.amount
        const tokenSymbol = this.state.tokenSymbol
        const contractAddress = this.state.contractAddress
        const receiverAddress = this.props.claimAddress // #todo change this
        const referralAmount = this.state.referralAmount
        transfer = {
          txHash,
          networkId,
          amount,
          tokenSymbol,
          contractAddress,
          referralAmount,
          receiverAddress
        }
      }
      return (
        <CompletedReceivedScreen transfer={transfer} isReceiver={isFromCache} />
      )
    }

    return (
      <div style={{ flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ height: 250 }}>
          <RetinaImage className='img-responsive' style={styles.tokenIcon} src={this.state.imageExists ? `https://raw.githubusercontent.com/Eth2io/tokens/master/images/${this.state.tokenAddress}.png` : 'https://raw.githubusercontent.com/Eth2io/eth2-assets/master/images/default_token.png'} onError={(e) => { this.setState({ imageExists: false }) }} />

          <div style={styles.amountContainer}>
            <span style={styles.amountSymbol}>{this.state.tokenSymbol} #<span style={styles.amountNumber}>{this.state.tokenId}</span></span>
          </div>
          <div style={styles.formContainer}>
            <div style={styles.button}>
              <ButtonPrimary
                handleClick={this._onSubmit.bind(this)}
                disabled={this.state.fetching}
                buttonColor={styles.blue}>
                {this.state.fetching ? <ButtonLoader /> : 'Claim'}
              </ButtonPrimary>

            </div>
            <div style={{ textAlign: 'center', marginTop: 20 }}>
              <div style={{ display: 'inline', fontSize: 18, fontFamily: 'Inter UI Regular' }}>Claiming to: </div><div style={{ display: 'inline', fontSize: 18, fontFamily: 'Inter UI Bold' }}>{this._shortAddress(this.props.claimAddress, 5)}</div>
            </div>
            <SpinnerOrError fetching={false} error={this.state.errorMessage} />
          </div>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div>
        <Header />
        <div style={{ height: window.innerHeight - 74, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          {this._renderConfirmDetailsForm()}
          <PoweredByVolca style={{ alignSelf: 'flex-end' }} />
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  networkId: state.web3Data.networkId,
  claimAddress: state.web3Data.address,
  cacheTransfers: getAllTransfers(state)
}), { claimNFT })(ClaimScreen)
