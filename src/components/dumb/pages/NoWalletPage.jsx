import React from 'react'
import { getDeviceOS } from './../../../utils'
import NoWalletPageDesktop from './NoWalletPageDesktop'
import NoWalletPageMobile from './NoWalletPageMobile'

const NoWalletPage = ({ showPortisModal }) => {
  const os = getDeviceOS()
  return window.innerWidth < 769
    ? <NoWalletPageMobile os={os} showPortisModal={showPortisModal} />
    : <NoWalletPageDesktop showPortisModal={showPortisModal} />
}

export default NoWalletPage
