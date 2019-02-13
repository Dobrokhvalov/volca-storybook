import React from 'react'
import Footer from './Footer'
import Header from './Header'
import './common.css'

class ClaimPage extends React.Component {
  render () {
    return (
      <div className={`page-container ${this.props.className}`} style={{ height: window.innerHeight }}>
        <Header />
        { this.props.children }
        <Footer />
      </div>
    )
  }
}

export default ClaimPage
