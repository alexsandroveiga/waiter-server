import { DeleteOrder, FindOrders, SaveOrder, UpdateOrderStatus } from '@/domain/contracts/repositories'
import { OrderModel } from '@/infra/repositories/mongodb/models'

export class MongoOrderRepository implements FindOrders, SaveOrder, UpdateOrderStatus, DeleteOrder {
  async find (): Promise<FindOrders.Output> {
    const orders = await OrderModel
      .find()
      .sort({ createdAt: 1 })
      .populate('products.product')
    return orders
  }

  async save ({ table, status, products }: SaveOrder.Input): Promise<SaveOrder.Output> {
    let order = await OrderModel.create({ table, status, products })
    order = await order.populate('products.product')
    return order
  }

  async updateStatus ({ id, status }: UpdateOrderStatus.Input): Promise<void> {
    await OrderModel.findByIdAndUpdate(id, { status })
  }

  async delete ({ id }: DeleteOrder.Input): Promise<void> {
    await OrderModel.findByIdAndDelete(id)
  }
}
