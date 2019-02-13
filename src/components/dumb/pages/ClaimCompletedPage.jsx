import React from 'react'
import PageContainer from '../common/PageContainer'
import ClaimCompletedIcon from '../common/ClaimCompletedIcon'
import { getEtherscanLinkTx } from '../../../utils'
import './pages.css'

const ClaimPendingPage = ({ txHash, networkId = '1', isReceiver = false }) => {
  const etherscanLink = getEtherscanLinkTx({ txHash, networkId })
  return (
    <PageContainer>
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
    </PageContainer>
  )
}

export default ClaimPendingPage
