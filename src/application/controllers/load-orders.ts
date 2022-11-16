import { Controller } from '@/application/controllers/controller'
import { OrdersLoader } from '@/domain/use-cases'
import { HttpResponse, ok } from '@/application/helpers'

export class LoadOrdersController extends Controller {
  constructor (private readonly ordersLoader: OrdersLoader) {
    super()
  }

  async perform (): Promise<HttpResponse> {
    const orders = await this.ordersLoader()
    return ok(orders)
  }
}
