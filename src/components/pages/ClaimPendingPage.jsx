import React from "react";
import Header from '../common/Header';
import Footer from '../common/Footer';
import Button from '../common/Button';
import PageContainer from '../common/PageContainer';
import PendingIcon from '../common/PendingIcon';
import './pages.css';


const PageContent = () => {
    return (
	<div className="claim-pending-page">
	  <PendingIcon/>
	</div>
    );
}



class ClaimPendingPage extends React.Component {
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

export default ClaimPendingPage;
