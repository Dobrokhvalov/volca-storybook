import React from 'react'
import { storiesOf } from '@storybook/react'
import NoWalletDesktop from '../../components/dumb/pages/NoWalletPageDesktop'

storiesOf('No Wallet Page', module)
  .add('Desktop version', () => <NoWalletDesktop showPortisModal={() => setTimeout(() => {}, 3000)} />)
