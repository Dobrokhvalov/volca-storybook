import React from 'react'
import { storiesOf } from '@storybook/react'

// component stories
import ButtonStory from './ButtonStory.jsx'
import PageContainerStory from './PageContainerStory.jsx'
import TokenIconStory from './TokenIconStory.jsx'

// common components
import Header from '../../components/dumb/common/Header'
import Footer from '../../components/dumb/common/Footer'
import PendingIcon from '../../components/dumb/common/PendingIcon'
import ClaimCompletedIcon from '../../components/dumb/common/ClaimCompletedIcon'
import Error from '../../components/dumb/common/Error'

// Common Components
storiesOf('Common Components', module)
  .add('Header', () => <Header />)
  .add('Footer', () => <Footer />)
  .add('Button', ButtonStory)
  .add('Page Container', PageContainerStory)
  .add('Token Icon', TokenIconStory)
  .add('Pending Icon', () => <PendingIcon />)
  .add('Claim Completed Icon', () => <ClaimCompletedIcon />)
  .add('Error', () => <Error text='This is an example of error-messgae' />)
