import React from 'react'
import PageContainer from '../common/PageContainer'
import ClaimCompletedIcon from '../common/ClaimCompletedIcon'
import AttentionIcon from '../common/AttentionIcon'
import { getEtherscanLinkTx } from '../../../utils'
import './pages.css'

const ClaimPendingPage = ({ txHash, networkId = '1', isReceiver = false }) => {
  const etherscanLink = getEtherscanLinkTx({ txHash, networkId })
  return (
    <PageContainer>
      <div className='claim-completed-page'>
        { isReceiver ? <ClaimCompletedIcon /> : <AttentionIcon /> }
        <div className='text-center'>
          { isReceiver ? (
          <div className='title'>
            You now own a rare<br /> digital drawing!
          </div>
          ) : (
            <div className='title'>
              This drawing has already<br /> been claimed
            </div>
          ) }
    <div>
      { txHash ? (
          <div className='text'>
            See details on <a className='link' href={etherscanLink} target='_blank'>Etherscan</a>
          </div> ) : null
      }
    </div>
        </div>
      </div>
    </PageContainer>
  )
}

export default ClaimPendingPage
