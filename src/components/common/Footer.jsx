import React from "react";
//import { Row, Col, Grid } from 'react-bootstrap';
import './common.css';

class Footer extends React.Component {
    render() {
        return (
            <div>
            <div className='footer'>	
              <div className='footer-align'>
                  <a href="https://volca.tech" className='no-hover'>
                    <div className='powered-by'>Powered by </div>
                    <div className='volca'>Volcà</div>
                </a>
            </div>
            </div>
            </div>	    
        );
    }
}

export default Footer;
