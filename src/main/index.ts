import './config/module-alias'
import { env } from '@/main/config/env'

import mongoose from 'mongoose'

mongoose.connect(env.mongo.url)
  .then(async () => {
    const { app } = await import('@/main/config/app')
    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
  })
  .catch(console.error)
