import React from 'react'
import Button from '../common/Button'
import PageContainer from '../common/PageContainer'
import AttentionIcon from '../common/AttentionIcon'
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

  _openMetamask () {
    window.open('https://metamask.io', '_blank')
  }
  
  render () {
    return (
      <PageContainer>
        <div>
          <div style={{ marginTop: 50 }} >
            <AttentionIcon />
          </div>
          <div style={{ ...styles.title }}>You need a wallet to<br />claim tokens </div>
          <div style={styles.buttonRow}>
            <Button
              label='Use Portis'
              refreshing={this.state.fetchingPortis}
              onClick={this._openPortisModal.bind(this)} />
          </div>
          <div style={styles.buttonRow}>
            <Button
              label='Use Metamask'
              onClick={this._openMetamask.bind(this)} /> 
          </div>
          <Instructions />
        </div>
      </PageContainer>
    )
  }
}

export default NoWalletDesktop
