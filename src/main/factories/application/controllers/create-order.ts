import { makeCreateOrder } from '@/main/factories/domain/use-cases'
import { CreateOrderController } from '@/application/controllers'

export const makeCreateOrderController = (): CreateOrderController => {
  return new CreateOrderController(makeCreateOrder())
}
