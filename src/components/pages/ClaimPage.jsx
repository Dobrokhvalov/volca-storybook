import React from "react";
import Header from '../common/Header';
import Footer from '../common/Footer';
import PageContainer from '../common/PageContainer';
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
	    <PageContainer>
	      <Header/>
	      <Content/>
	      <Footer/>
	    </PageContainer>	    
        );
    }
}

export default ClaimPage;
