import React from "react";
import Header from '../common/Header';
import Footer from '../common/Footer';
import Button from '../common/Button';
import PageContainer from '../common/PageContainer';
import './pages.css';


const PageContent = () => {
    return (
	<Button label="Claim"/>	
    );
}



class ClaimPage extends React.Component {
    render() {
        return (
	    <PageContainer>
	      <Header/>
	      <PageContent/>
	      <Footer/>
	    </PageContainer>	    
        );
    }
}

export default ClaimPage;
