import { setupCreateProduct, CreateProduct } from '@/domain/use-cases'
import { makeMongoProductRepo } from '@/main/factories/infra/repositories/mongodb'
import { makeAwsS3FileStorage, makeUUIDHandler } from '@/main/factories/infra/gateways'

export const makeCreateProduct = (): CreateProduct => {
  const productRepo = makeMongoProductRepo()
  const fileStorage = makeAwsS3FileStorage()
  const crypto = makeUUIDHandler()
  return setupCreateProduct(productRepo, fileStorage, crypto)
}
