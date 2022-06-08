import linePayClient from '../utils/linePayClient'

export default defineEventHandler(async (event) => {
  const body = await useBody(event)

  const res = await linePayClient.checkPaymentStatus.send({
    transactionId: body.transactionId,
    params: {}
  })

  return res.body
})
