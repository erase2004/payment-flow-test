const { env } = process

export const SITE_URL = env.SITE_URL || 'http://localhost:3000'

// LINE Pay API Client
export const LINE_PAY_CHANNEL_ID = env.LINE_PAY_CHANNEL_ID || ''
export const LINE_PAY_CHANNEL_KEY = env.LINE_PAY_CHANNEL_KEY || ''
export const LINE_PAY_CLIENT_MODE = ['development', 'production'].includes(env.LINE_PAY_CLIENT_MODE) ? env.LINE_PAY_CLIENT_MODE : 'development'