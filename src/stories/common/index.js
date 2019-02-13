import React from 'react'
import { storiesOf } from '@storybook/react'

// component stories
import ButtonStory from './ButtonStory.jsx'
import PageContainerStory from './PageContainerStory.jsx'
import TokenIconStory from './TokenIconStory.jsx'

// common components
import Header from '../../new-components/common/Header'
import Footer from '../../new-components/common/Footer'
import PendingIcon from '../../new-components/common/PendingIcon'
import ClaimCompletedIcon from '../../new-components/common/ClaimCompletedIcon'

// Common Components
storiesOf('Common Components', module)
  .add('Header', () => <Header />)
  .add('Footer', () => <Footer />)
  .add('Button', ButtonStory)
  .add('Page Container', PageContainerStory)
  .add('Token Icon', TokenIconStory)
  .add('Pending Icon', () => <PendingIcon />)
  .add('Claim Completed Icon', () => <ClaimCompletedIcon />)
