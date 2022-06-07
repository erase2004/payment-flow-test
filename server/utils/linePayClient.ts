import { createLinePayClient } from 'line-pay-merchant'
import { LINE_PAY_CHANNEL_ID, LINE_PAY_CHANNEL_KEY  } from '~~/config'

const linePayClient = createLinePayClient({
  channelId: LINE_PAY_CHANNEL_ID,
  channelSecretKey: LINE_PAY_CHANNEL_KEY,
  env: 'development'
})

export default linePayClient