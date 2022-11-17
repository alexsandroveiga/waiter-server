import { Controller } from '@/application/controllers/controller'
import { ChangeOrderStatus } from '@/domain/use-cases'
import { badRequest, HttpResponse, noContent } from '@/application/helpers'

type HttpRequest = { id: string, status: string }

export class ChangeOrderStatusController extends Controller {
  constructor (private readonly changeOrderStatus: ChangeOrderStatus) {
    super()
  }

  async perform ({ id, status }: HttpRequest): Promise<HttpResponse> {
    if (!status || !['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      return badRequest(new Error(status ? `${status.toUpperCase()} is not WAITING, IN_PRODUCTION or DONE` : 'Status is required'))
    }
    await this.changeOrderStatus({ id, status })
    return noContent()
  }
}
