import { DeleteOrder } from '@/domain/contracts/repositories'

type Setup = (orderRepo: DeleteOrder) => CancelOrder
export type CancelOrder = (input: DeleteOrder.Input) => Promise<void>

export const setupCancelOrder: Setup = orderRepo => async ({ id }) => {
  return orderRepo.delete({ id })
}
