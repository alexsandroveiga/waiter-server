import { ChangeOrderStatus, setupChangeOrderStatus } from '@/domain/use-cases'
import { makeMongoOrderRepo } from '@/main/factories/infra/repositories/mongodb'

export const makeChangeOrderStatus = (): ChangeOrderStatus => {
  return setupChangeOrderStatus(makeMongoOrderRepo())
}
