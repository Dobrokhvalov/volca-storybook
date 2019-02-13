import React from 'react'
import { storiesOf } from '@storybook/react'

// pages
import ClaimPage from '../new-components/pages/ClaimPage'
import ClaimPendingPage from '../new-components/pages/ClaimPendingPage'
import ClaimCompletedPage from '../new-components/pages/ClaimCompletedPage'

// Pages
storiesOf('Pages', module)
  .add('Claim Page', () => <ClaimPage />)
  .add('Claim Pending Page', () => <ClaimPendingPage />)
  .add('Claim Completed Page', () => <ClaimCompletedPage />)
