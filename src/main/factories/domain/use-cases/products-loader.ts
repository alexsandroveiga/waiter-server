import { setupProductsLoader, ProductsLoader } from '@/domain/use-cases'
import { makeMongoProductRepo } from '@/main/factories/infra/repositories/mongodb'

export const makeProductsLoader = (): ProductsLoader => {
  return setupProductsLoader(makeMongoProductRepo())
}
