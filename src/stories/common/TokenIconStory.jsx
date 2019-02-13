import React from 'react'
import TokenIcon from '../../components/common/TokenIcon'

const TokenIconStory = () => (
  <div>
    <div>
      <h4> ZRX token: </h4>
      <TokenIcon tokenAddress='0xe41d2489571d322189246dafa5ebde1f4699f498' />
    </div>
    <hr />
    <div>
      <h4> Unknown Token: </h4>
      <TokenIcon tokenAddress='0x000' />
    </div>
  </div>
)

export default TokenIconStory
