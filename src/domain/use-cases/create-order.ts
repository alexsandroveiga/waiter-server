import { SaveOrder } from '@/domain/contracts/repositories'

type Setup = (orderRepo: SaveOrder) => CreateOrder
export type CreateOrder = (input: SaveOrder.Input) => Promise<SaveOrder.Output>

export const setupCreateOrder: Setup = orderRepo => async ({ table, status, products }) => {
  return orderRepo.save({ table, status, products })
}
