import { FindOrders, SaveOrder } from '@/domain/contracts/repositories'
import { OrderModel } from '@/infra/repositories/mongodb/models'

export class MongoOrderRepository implements FindOrders, SaveOrder {
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
      products: order.products.map(({ product, quantity }) => ({
        product: {
          id: product.id,
          name: product.name,
          description: product.description,
          imagePath: product.imagePath,
          price: product.price,
          ingredients: product.ingredients.map(ingredient => ({
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
    const order = await OrderModel.create({ table, status, products })
    return order
  }
}
