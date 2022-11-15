export const env = {
  mongo: {
    url: process.env.MONGO_URL ?? ''
  },
  port: process.env.PORT ?? 8080
}
