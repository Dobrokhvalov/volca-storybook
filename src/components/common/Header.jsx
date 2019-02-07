import React from "react";
//import { Row, Col, Grid } from 'react-bootstrap';
import './common.css';


const styles = {
    header: { 
	paddingTop: 32,
	fontFamily: 'Inter UI Black',
	fontSize: 30,
	textAlign: 'center'
    }
}


class Header extends React.Component {
    render() {
        return (
	    <div style={styles.header} className="header">
              Get tokens
	    </div>	    
        );
    }
}

export default Header;
