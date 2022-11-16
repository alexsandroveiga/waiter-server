import { setupProductsByCategoryLoader, ProductsByCategoryLoader } from '@/domain/use-cases'
import { makeMongoProductRepo } from '@/main/factories/infra/repositories/mongodb'

export const makeProductsByCategoryLoader = (): ProductsByCategoryLoader => {
  return setupProductsByCategoryLoader(makeMongoProductRepo())
}
