import React from 'react'
import Button from '../common/Button'
import PageContainer from '../common/PageContainer'
import TokenIcon from '../common/TokenIcon'
import Error from '../common/Error'
import './pages.css'

const ClaimPage = ({ onSubmit, refreshing, error = null }) => {
  return (
    <PageContainer>
      <div className='claim-page'>
        <TokenIcon />
        <div className='claim-title'>10 DGT</div>
        <Button
          label='Claim'
          onClick={onSubmit}
          refreshing={refreshing} />
        <Error text={error} />
        <div className='button-subtitle text-center'>Claiming to:
          <span className='bold'> 0x000...000</span>
        </div>
      </div>
    </PageContainer>
  )
}

export default ClaimPage
