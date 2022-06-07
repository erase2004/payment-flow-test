import linePayClient from "../utils/linePayClient"
import { sendRedirect } from "h3"

export default defineEventHandler(async (event) => {
  const query = useQuery(event)

  const res = await linePayClient.confirm.send({
    transactionId: query.transactionId,
    body: {
      currency: 'TWD',
      amount: 1
    }
  })

  if (res.body.info.regKey) {
    return sendRedirect(event, `/subscription-confirm?regkey=${res.body.info.regKey}`)
  }
  return sendRedirect(event, '/confirm')
})
