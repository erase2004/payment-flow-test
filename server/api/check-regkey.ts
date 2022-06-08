import linePayClient from '../utils/linePayClient'

export default defineEventHandler(async (event) => {
  const body = await useBody(event)

  const res = await linePayClient.checkRegKey.send({
    regKey: body.regKey,
    params: {}
  })

  return res.body
})
