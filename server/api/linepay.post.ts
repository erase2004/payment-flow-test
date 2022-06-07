import linePayClient from '../utils/linePayClient'
import { v4 as uuid } from 'uuid'
import { SITE_URL } from "~~/config"

export default defineEventHandler(async (event) => {
  const res = await linePayClient.request.send({
    body: {
      amount: 1,
      currency: 'TWD',
      orderId: new Date().valueOf().toString(),
      packages: [
        {
          id: uuid(),
          amount: 1,
          products: [
            {
              name: '測試產品1',
              quantity: 1,
              price: 1,
              imageUrl: '~/public/images/product.jpg'
            }
          ]
        }
      ],
      redirectUrls: {
        confirmUrl: `${SITE_URL}/api/confirm`,
        cancelUrl: `${SITE_URL}/cancel`
      }
    }
  })

  return res
})
