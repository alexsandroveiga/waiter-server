import { Controller } from '@/application/controllers/controller'
import { ProductsByCategoryLoader } from '@/domain/use-cases'
import { HttpResponse, ok } from '@/application/helpers'

type HttpRequest = { id: string }

export class LoadProductsByCategoryController extends Controller {
  constructor (private readonly productsByCategoryLoader: ProductsByCategoryLoader) {
    super()
  }

  async perform ({ id }: HttpRequest): Promise<HttpResponse> {
    const products = await this.productsByCategoryLoader({ id })
    return ok(products)
  }
}
