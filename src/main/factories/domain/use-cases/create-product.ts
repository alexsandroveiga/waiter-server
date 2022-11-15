import { setupCreateProduct, CreateProduct } from '@/domain/use-cases'
import { makeMongoProductRepo } from '@/main/factories/infra/repositories/mongodb'

export const makeCreateProduct = (): CreateProduct => {
  return setupCreateProduct(makeMongoProductRepo())
}
