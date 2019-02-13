import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import PageContainer from '../common/PageContainer'
import ClaimCompletedIcon from '../common/ClaimCompletedIcon'
import { getEtherscanLinkTx } from '../../utils'
import './pages.css'

const PageContent = ({ txHash, networkId = '1', isReceiver = false }) => {
  const etherscanLink = getEtherscanLinkTx({ txHash, networkId })
  return (
    <div className='claim-completed-page'>
      <ClaimCompletedIcon />
      <div className='text-center'>
        <div className='title'>
          You claimed <span className='bold-blue'>10 DGT</span>
        </div>
        <div>
          <div className='text'>
            Details on <a className='link' href={etherscanLink} target='_blank'>Etherscan</a>
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
