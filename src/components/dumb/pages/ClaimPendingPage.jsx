import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import PageContainer from '../common/PageContainer'
import PendingIcon from '../common/PendingIcon'
import { getEtherscanLinkTx } from '../../../utils'
import './pages.css'

const PageContent = ({ txHash, networkId = '1' }) => {
  const etherscanLink = getEtherscanLinkTx({ txHash, networkId })
  return (
    <div className='claim-pending-page'>
      <PendingIcon />
      <div className='text-center'>
        <div className='title'>
          Claiming...
        </div>
        <div className='subtitle'>
          Transaction is processing
        </div>
        <div className='text'>
          It may take a few minutes. You can<br />
          check status later in 'Wallet'.
        </div>
        <div>
          <div className='text etherscan-details'>
            Details on <a className='link' href={etherscanLink}>Etherscan</a>
          </div>
        </div>
      </div>
    </div>
  )
}

class ClaimPendingPage extends React.Component {
  render () {
    return (
      <PageContainer>
        <Header />
        <PageContent {...this.props} />
        <Footer />
      </PageContainer>
    )
  }
}

export default ClaimPendingPage
