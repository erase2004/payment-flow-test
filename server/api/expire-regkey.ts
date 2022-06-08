import linePayClient from '../utils/linePayClient'

export default defineEventHandler(async (event) => {
  const body = await useBody(event)

  const res = await linePayClient.expireRegKey.send({
    regKey: body.regKey
  })

  return res.body
})
