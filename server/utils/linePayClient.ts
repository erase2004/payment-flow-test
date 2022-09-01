import { createLinePayClient } from 'line-pay-merchant'
import { LINE_PAY_CHANNEL_ID, LINE_PAY_CHANNEL_KEY, LINE_PAY_CLIENT_MODE } from '~~/config'

const linePayClient = createLinePayClient({
  channelId: LINE_PAY_CHANNEL_ID,
  channelSecretKey: LINE_PAY_CHANNEL_KEY,
  env: LINE_PAY_CLIENT_MODE as 'development'|'production',
})

export default linePayClient