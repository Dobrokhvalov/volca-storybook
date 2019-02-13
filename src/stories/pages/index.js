import React from 'react'
import { storiesOf } from '@storybook/react'

// stories
import './ClaimPageStory'
import './NoWalletStory'

// pages
import ClaimPendingPage from '../../components/dumb/pages/ClaimPendingPage'
import ClaimCompletedPage from '../../components/dumb/pages/ClaimCompletedPage'

// Other Pages
storiesOf('Other Claim Pages', module)
  .add('Claim Pending Page', () => <ClaimPendingPage />)
  .add('Claim Completed Page (Receiver)', () => <ClaimCompletedPage isReceiver txHash='0x0' />)
  .add('Claim Completed Page (Not receiver)', () => <ClaimCompletedPage isReceiver={false} />)
