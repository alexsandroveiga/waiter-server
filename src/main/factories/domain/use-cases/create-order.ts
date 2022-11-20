import { setupCreateOrder, CreateOrder } from '@/domain/use-cases'
import { makeMongoOrderRepo } from '@/main/factories/infra/repositories/mongodb'
import { makeSocketIoHandler } from '@/main/factories/infra/gateways'

export const makeCreateOrder = (): CreateOrder => {
  return setupCreateOrder(makeMongoOrderRepo(), makeSocketIoHandler())
}
