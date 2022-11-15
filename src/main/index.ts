import './config/module-alias'
import { env } from '@/main/config/env'
import { MongoHelper } from '@/infra/repositories/mongodb/helpers'

MongoHelper.getInstance().connect(process.env.MONGO_URL ?? '')
  .then(async () => {
    const { app } = await import('@/main/config/app')
    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
  })
  .catch(console.error)
