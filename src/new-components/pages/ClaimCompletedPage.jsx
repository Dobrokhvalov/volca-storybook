import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Button from '../common/Button'
import PageContainer from '../common/PageContainer'
import ClaimCompletedIcon from '../common/ClaimCompletedIcon'
import './pages.css'

const PageContent = () => {
  const etherscanLink = '#'
  return (
    <div className='claim-completed-page'>
      <ClaimCompletedIcon />
      <div className='text-center'>
        <div className='title'>
	      You claimed <span className='bold-blue'>10 DGT</span>
        </div>
        <div>
          <div className='text'>
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
        <PageContent />
        <Footer />
      </PageContainer>
    )
  }
}

export default ClaimPendingPage
