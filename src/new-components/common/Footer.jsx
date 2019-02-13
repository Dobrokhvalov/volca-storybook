import React from 'react'
// import { Row, Col, Grid } from 'react-bootstrap';
import './common.css'

const styles = {
  footer1: {
    display: 'block',
    marginBottom: 20,
    marginTop: 20,
    width: '100%'
  },
  footer2: {
    width: '100%',
    textAlign: 'center'
  },
  noHover: {
    textDecoration: 'none'
  },
  poweredBy: {
    display: 'inline',
    fontSize: 18,
    fontFamily: 'Inter UI Medium',
    color: '#979797'
  },
  volca: {
    display: 'inline',
    fontSize: 18,
    fontFamily: 'Inter UI Bold',
    color: 'black'
  }
}

class Footer extends React.Component {
  render () {
    return (
      <div>
        <div style={styles.footer1}>
          <div style={styles.footer2}>
            <a href='https://volca.tech' style={styles.noHover}>
              <div style={styles.poweredBy}>Powered by </div>
              <div style={styles.volca}>Volcà</div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
