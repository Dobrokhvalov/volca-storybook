import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

import ClaimPage from '../components/pages/ClaimPage';
import '../../public/css/Inter UI fonts/interui-fonts.css';

// Pages
storiesOf('Pages', module)
    .add('Claim Page', () => <ClaimPage/>);
    //.add('Pending Page', () => <Button onClick={action('clicked')}>Hello Button</Button>);


// Common Components
storiesOf('Common Components', module)
  .add('Header', () => <Header/>)
    .add('Footer', () => <Footer/>);

// Footer



