import linePayClient from '../utils/linePayClient'

export default defineEventHandler(async (event) => {
  const body = await useBody(event)

  const res = await linePayClient.refund.send({
    transactionId: body.transactionId,
    body: {
      refundAmount: body.refundAmount
    }
  })

  return res.body
})
