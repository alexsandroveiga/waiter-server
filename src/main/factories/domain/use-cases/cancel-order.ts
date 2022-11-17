import { CancelOrder, setupCancelOrder } from '@/domain/use-cases'
import { makeMongoOrderRepo } from '@/main/factories/infra/repositories/mongodb'

export const makeCancelOrder = (): CancelOrder => {
  return setupCancelOrder(makeMongoOrderRepo())
}
