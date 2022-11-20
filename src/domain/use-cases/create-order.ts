import { SaveOrder } from '@/domain/contracts/repositories'
import { EmitEvent } from '@/domain/contracts/gateways'

type Setup = (orderRepo: SaveOrder, event: EmitEvent) => CreateOrder
export type CreateOrder = (input: SaveOrder.Input) => Promise<SaveOrder.Output>

export const setupCreateOrder: Setup = (orderRepo, event) => async ({ table, status, products }) => {
  const order = await orderRepo.save({ table, status, products })
  event.emit({ key: 'order@new', value: order })
  return order
}
