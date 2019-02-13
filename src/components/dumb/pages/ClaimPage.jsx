import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Button from '../common/Button'
import PageContainer from '../common/PageContainer'
import TokenIcon from '../common/TokenIcon'
import './pages.css'

const PageContent = ({ onSubmit, refreshing }) => {
  return (
    <div className='claim-page'>
      <TokenIcon />
      <div className='claim-title'>10 DGT</div>
      <Button
        label='Claim'
        onClick={onSubmit}
        refreshing={refreshing} />
      <div className='button-subtitle text-center'>Claiming to:
        <span className='bold'> 0x000...000</span>
      </div>
    </div>
  )
}

class ClaimPage extends React.Component {
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

export default ClaimPage
