import { UpdateOrderStatus } from '@/domain/contracts/repositories'

type Setup = (orderRepo: UpdateOrderStatus) => ChangeOrderStatus
export type ChangeOrderStatus = (input: UpdateOrderStatus.Input) => Promise<void>

export const setupChangeOrderStatus: Setup = orderRepo => async ({ id, status }) => {
  return orderRepo.updateStatus({ id, status })
}
