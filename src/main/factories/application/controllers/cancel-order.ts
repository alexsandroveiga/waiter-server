import { makeCancelOrder } from '@/main/factories/domain/use-cases'
import { CancelOrderController } from '@/application/controllers'

export const makeCancelOrderController = (): CancelOrderController => {
  return new CancelOrderController(makeCancelOrder())
}
