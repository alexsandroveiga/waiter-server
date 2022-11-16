import { setupOrdersLoader, OrdersLoader } from '@/domain/use-cases'
import { makeMongoOrderRepo } from '@/main/factories/infra/repositories/mongodb'

export const makeOrdersLoader = (): OrdersLoader => {
  return setupOrdersLoader(makeMongoOrderRepo())
}
