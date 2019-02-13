import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllTransfers } from '../../data/selectors'
import ReceivingScreen from './ReceivingScreen'
import TxErrorScreen from './TxErrorScreen'
import ClaimCompletedPage from '../../new-components/pages/ClaimCompletedPage'

export class TransferScreen extends Component {
  render () {
    const { transfer, urlError } = this.props
    // if transfer not found
    if (urlError) {
      return (<div style={{ color: 'red' }}>{urlError}</div>)
    }

    if (transfer.isError) {
      return (<TxErrorScreen transfer={transfer} />)
    }

    switch (transfer.status) {
      case 'receiving':
        return (
          <ReceivingScreen transfer={transfer} />
        )
      case 'received':
        return (
          <ClaimCompletedPage
            networkId={transfer.networkId}
            txHash={transfer.txHash}
            isReceiver />
        )
      default: {
        window.alert('Unknown status: ' + transfer.status)
      }
    }
  }
}

const mapStateToProps = (state, props) => {
  const transferId = props.match.params.transferId
  const transfer = getAllTransfers(state).filter(transfer => transfer.id === transferId)[0] || {}
  let urlError = ''
  if (!transfer || !transfer.id) {
    urlError = 'Transfer not found. Check the url!'
  }

  return {
    transfer,
    urlError
  }
}

export default connect(mapStateToProps)(TransferScreen)
