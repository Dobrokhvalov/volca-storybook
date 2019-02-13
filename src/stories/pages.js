import React from 'react'
import { storiesOf } from '@storybook/react'

// pages
import ClaimPage from '../components/dumb/pages/ClaimPage'
import ClaimPendingPage from '../components/dumb/pages/ClaimPendingPage'
import ClaimCompletedPage from '../components/dumb/pages/ClaimCompletedPage'

// Pages
storiesOf('Pages', module)
  .add('Claim Page', () => <ClaimPage />)
  .add('Claim Pending Page', () => <ClaimPendingPage />)
  .add('Claim Completed Page', () => <ClaimCompletedPage />)
