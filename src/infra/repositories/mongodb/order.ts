import { DeleteOrder, FindOrders, SaveOrder, UpdateOrderStatus } from '@/domain/contracts/repositories'
import { OrderModel } from '@/infra/repositories/mongodb/models'

export class MongoOrderRepository implements FindOrders, SaveOrder, UpdateOrderStatus, DeleteOrder {
  async find (): Promise<FindOrders.Output> {
    const orders = await OrderModel
      .find()
      .sort({ createdAt: -1 })
      .populate('products.product')
      .populate('products.product.category')
    return orders.map(order => ({
      id: order.id,
      table: order.table,
      status: order.status,
      products: order.products.map(({ product, quantity, id }) => ({
        id,
        product: {
          id: product.id,
          name: product.name,
          description: product.description,
          imagePath: product.imagePath,
          price: product.price,
          ingredients: product.ingredients.map(ingredient => ({
            id: ingredient.id,
            name: ingredient.name,
            icon: ingredient.icon
          })),
          category: product.category
        },
        quantity
      })),
      createdAt: order.createdAt
    }))
  }

  async save ({ table, status, products }: SaveOrder.Input): Promise<SaveOrder.Output> {
    let order = await OrderModel.create({ table, status, products })
    order = await order.populate('products.product')
    return {
      id: order.id,
      table: order.table,
      status: order.status,
      products: order.products.map(({ product, quantity, id }) => ({
        id,
        product: {
          id: product.id,
          name: product.name,
          description: product.description,
          imagePath: product.imagePath,
          price: product.price,
          ingredients: product.ingredients.map(ingredient => ({
            id: ingredient.id,
            name: ingredient.name,
            icon: ingredient.icon
          })),
          category: product.category
        },
        quantity
      })),
      createdAt: order.createdAt
    }
  }

  async updateStatus ({ id, status }: UpdateOrderStatus.Input): Promise<void> {
    await OrderModel.findByIdAndUpdate(id, { status })
  }

  async delete ({ id }: DeleteOrder.Input): Promise<void> {
    await OrderModel.findByIdAndDelete(id)
  }
}
