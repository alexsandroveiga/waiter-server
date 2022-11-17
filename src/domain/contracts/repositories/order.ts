import { Order } from '@/domain/models'

export interface FindOrders {
  find: () => Promise<FindOrders.Output>
}

export namespace FindOrders {
  export type Output = Order[]
}

export interface SaveOrder {
  save: (input: SaveOrder.Input) => Promise<SaveOrder.Output>
}

export namespace SaveOrder {
  export type Input = {
    table: string
    status?: string
    products: Array<{
      product: string
      quantity?: number
    }>
  }
  export type Output = Order
}

export interface UpdateOrderStatus {
  updateStatus: (input: UpdateOrderStatus.Input) => Promise<void>
}

export namespace UpdateOrderStatus {
  export type Input = { id: string, status: string }
}

export interface DeleteOrder {
  delete: (input: DeleteOrder.Input) => Promise<void>
}

export namespace DeleteOrder {
  export type Input = { id: string }
}
