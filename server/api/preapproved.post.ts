import linePayClient from '../utils/linePayClient'

export default defineEventHandler(async (event) => {
  const body = await useBody(event)

  const res = await linePayClient.payPreapproved.send({
    regKey: body.regKey,
    body: {
      productName: '測試產品2',
      amount: body.amount,
      currency: 'TWD',
      orderId: new Date().valueOf().toString()
    }
  })

  return res.body
})
