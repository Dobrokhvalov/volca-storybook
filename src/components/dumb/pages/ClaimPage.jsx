import React from 'react'
import Button from '../common/Button'
import PageContainer from '../common/PageContainer'
import Error from '../common/Error'
import './pages.css'

const ClaimPage = ({ onSubmit, refreshing, error = null }) => {
  return (
    <PageContainer>
      <div className='claim-page'>
        <div className='claim-title'>Surprise!</div>
        <div className='claim-subtitle'>Here’s a free rare digital drawing<br />for you!</div>
        <Button
          label='Redeem Now'
          onClick={onSubmit}
          refreshing={refreshing} />
        <Error text={error} />
        <div className='subtext'> Link expires soon</div>
      </div>
    </PageContainer>
  )
}

export default ClaimPage
