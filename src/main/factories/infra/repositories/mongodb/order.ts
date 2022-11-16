import { MongoOrderRepository } from '@/infra/repositories/mongodb'

export const makeMongoOrderRepo = (): MongoOrderRepository => {
  return new MongoOrderRepository()
}
