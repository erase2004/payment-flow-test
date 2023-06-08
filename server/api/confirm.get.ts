import linePayClient from "../utils/linePayClient"
import { sendRedirect, setCookie } from "h3"

export default defineEventHandler(async (event) => {
  const query = useQuery(event)

  try {
    const res = await linePayClient.confirm.send({
      transactionId: query.transactionId,
      body: {
        currency: 'TWD',
        amount: 1
      }
    })

    if (res.body.info.regKey) {
      setCookie(event, 'subscription-confirm', JSON.stringify(res.body))
      return sendRedirect(event, "/subscription-confirm")
    }

    setCookie(event, 'confirm', JSON.stringify(res.body))
    return sendRedirect(event, '/confirm')
  } catch (err) {
    console.error(err);
    return sendRedirect(event, "/confirm")
  }
})
