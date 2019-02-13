import React from 'react'
import { storiesOf } from '@storybook/react'
import NoWalletPageDesktop from '../../components/dumb/pages/NoWalletPageDesktop'
import NoWalletPageMobile from '../../components/dumb/pages/NoWalletPageMobile'

const wait = (ms) => {
  return new Promise((resolve) => {
    console.log('wait..')
    setTimeout(() => {
      console.log('resolveing')
      resolve()
    }, ms)
  })
}

storiesOf('No Wallet Page', module)
  .add('Desktop version', () => <NoWalletPageDesktop showPortisModal={() => wait(3000)} />)
  .add('Android (Opera)', () => <NoWalletPageMobile walletId='opera' deviceOS='android' showPortisModal={() => wait(3000)} />)
  .add('iOS (Trust)', () => <NoWalletPageMobile walletId='trust' deviceOS='ios' showPortisModal={() => wait(3000)} />)

