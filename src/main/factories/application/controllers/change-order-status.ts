import { makeChangeOrderStatus } from '@/main/factories/domain/use-cases'
import { ChangeOrderStatusController } from '@/application/controllers'

export const makeChangeOrderStatusController = (): ChangeOrderStatusController => {
  return new ChangeOrderStatusController(makeChangeOrderStatus())
}
