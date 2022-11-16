import { setupCreateOrder, CreateOrder } from '@/domain/use-cases'
import { makeMongoOrderRepo } from '@/main/factories/infra/repositories/mongodb'

export const makeCreateOrder = (): CreateOrder => {
  return setupCreateOrder(makeMongoOrderRepo())
}
