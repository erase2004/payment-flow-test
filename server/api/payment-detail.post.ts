import linePayClient from '../utils/linePayClient'

export default defineEventHandler(async (event) => {
  const body = await useBody(event)

  const res = await linePayClient.paymentDetails.send({
    params: {
      transactionId: body.transactionId,
    }
  })

  return res.body
})
