import { Controller } from '@/application/controllers/controller'
import { CreateOrder } from '@/domain/use-cases'
import { badRequest, HttpResponse, ok } from '@/application/helpers'

type HttpRequest = { table: string, status: string, products: Array<{ product: string, quantity?: number }> }

export class CreateOrderController extends Controller {
  constructor (private readonly createOrder: CreateOrder) {
    super()
  }

  async perform ({ table, status, products }: HttpRequest): Promise<HttpResponse> {
    if (!table) return badRequest(new Error('Table is required'))
    if (status && !['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) return badRequest(new Error('Invalid status'))
    if (!products) return badRequest(new Error('Products are required'))
    const order = await this.createOrder({ table, status, products })
    return ok(order)
  }
}
