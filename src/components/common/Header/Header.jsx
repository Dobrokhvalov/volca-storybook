import React, { Component } from 'react'
import RetinaImage from 'react-retina-image'
import AddressButton from './AddressButton'
import { Row, Col, Button, Grid } from 'react-bootstrap'
import Logo from './logo'

class e2pHeader extends React.Component {
  render () {
    return (
      <Row style={{ paddingTop: 35 }}>

        <Col sm={5}>
          <Logo />
        </Col>
        <Col style={{}} sm={7}>
          <div style={{ display: 'flex', justifyContent: 'center', fontSize: 16, fontFamily: 'Inter UI Regular' }}>
            <div style={{ paddingTop: 10 }}>Unlock more features</div>
            <a href='mailto: hi@volca.tech' style={{ width: 120, height: 32, marginTop: 5, marginLeft: 30, borderRadius: 5, border: 'none', backgroundColor: '#0078FF', color: 'white', textAlign: 'center', paddingTop: 5, textDecoration: 'none' }}>Contact Us</a>
          </div>
        </Col>

      </Row>
    )
  }
}

export default e2pHeader
