import React from "react";
import './common.css';


class ClaimPage extends React.Component {
    render() {
        return (
	    <div className="page-container" style={{height: window.innerHeight}}>
	      { this.props.children }
	    </div>	    
        );
    }
}


export default ClaimPage;
