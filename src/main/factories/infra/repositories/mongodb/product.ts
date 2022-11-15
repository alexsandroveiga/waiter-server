import { MongoProductRepository } from '@/infra/repositories/mongodb'

export const makeMongoProductRepo = (): MongoProductRepository => {
  return new MongoProductRepository()
}
