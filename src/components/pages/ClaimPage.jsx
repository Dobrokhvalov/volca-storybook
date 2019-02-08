import React from "react";
import Header from '../common/Header';
import Footer from '../common/Footer';
import './pages.css';


const Content = () => {
    return (
	<div style={{textAlign: 'center'}}>
	  Claim here
	</div>
    );
}



class ClaimPage extends React.Component {
    render() {
        return (
	    <div className="page-container" style={{height: window.innerHeight}}>
	      <Header/>
	      <Content/>
	      <Footer/>
	    </div>	    
        );
    }
}

export default ClaimPage;
