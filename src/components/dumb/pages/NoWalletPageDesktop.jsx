import React from 'react'
import Button from '../common/Button'
import PageContainer from '../common/PageContainer'
import styles from '../../NotConnectedScreens/styles'


const Instructions = () => {
  return (
    <div style={styles.instructionsContainer}>
      <div style={styles.howtoTitle}>How to:</div>
      <div style={styles.instructionsText}> 1. Install/Open <a href='https://metamask.io/' style={{ color: '#0099ff', textDecoration: 'none' }}>Metamask Chrome Extension</a></div>
      <div style={styles.instructionsText}> 2. Create new or import existing wallet </div>
      <div style={styles.instructionsText}> 3. Reload claim page or click again on claiming link and follow simple instructions</div>
    </div>
  )
}

class NoWalletDesktop extends React.Component {
  state = {
    fetchingPortis: false
  }

  _openPortisModal () {
    this.setState({ fetchingPortis: true })
    setTimeout(async () => { // let UI update
      console.log('openning modal')
      await this.props.showPortisModal()
      this.setState({ fetchingPortis: false })
    }, 0)
  }

  render () {
    return (
      <PageContainer>
        <div>
          <div><img src={'https://raw.githubusercontent.com/Eth2io/eth2-assets/master/images/attention_icon.png'} style={styles.largeWalletIcon} /></div>
          <div style={{ ...styles.title }}>You need a wallet to<br />claim tokens </div>

          <div style={styles.buttonRow}>
            <Button
              label='Use Portis'
              style={{ backgroundColor: '#6CB3DB', borderColor: '#6CB3DB' }}
              onClick={this._openPortisModal.bind(this)} />
          </div>

          <div style={styles.buttonRow}>
            <a href='https://metamask.io/' style={{ ...styles.button, backgroundColor: '#f5a623', borderColor: '#f5a623' }} target='_blank'>Use Metamask</a>
          </div>
          <Instructions />
        </div>
      </PageContainer>
    )
  }
}

export default NoWalletDesktop
