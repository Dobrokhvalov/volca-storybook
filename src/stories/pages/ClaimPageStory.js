import React from 'react'
import { storiesOf } from '@storybook/react'
import ClaimPage from '../../components/dumb/pages/ClaimPage'

storiesOf('Claim Page', module)
  .add('Basic', () => <ClaimPage />)
  .add('In Fetching State', () => <ClaimPage refreshing />)
  .add('In Error State', () => <ClaimPage error='Failed to claim' />)
