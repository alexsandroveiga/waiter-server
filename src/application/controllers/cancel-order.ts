import { Controller } from '@/application/controllers/controller'
import { CancelOrder } from '@/domain/use-cases'
import { HttpResponse, noContent } from '@/application/helpers'

type HttpRequest = { id: string }

export class CancelOrderController extends Controller {
  constructor (private readonly cancelOrder: CancelOrder) {
    super()
  }

  async perform ({ id }: HttpRequest): Promise<HttpResponse> {
    await this.cancelOrder({ id })
    return noContent()
  }
}
