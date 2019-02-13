import React from 'react'
import { storiesOf } from '@storybook/react'
import NoWalletDesktop from '../../components/dumb/pages/NoWalletPageDesktop'

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
  .add('Desktop version', () => <NoWalletDesktop showPortisModal={() => wait(3000)} />)
