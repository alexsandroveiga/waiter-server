import { FindOrders } from '@/domain/contracts/repositories'

type Setup = (orderRepo: FindOrders) => OrdersLoader
export type OrdersLoader = () => Promise<FindOrders.Output>

export const setupOrdersLoader: Setup = orderRepo => async () => {
  return orderRepo.find()
}
