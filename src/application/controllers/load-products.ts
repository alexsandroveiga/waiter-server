import { Controller } from '@/application/controllers/controller'
import { ProductsLoader } from '@/domain/use-cases'
import { HttpResponse, ok } from '@/application/helpers'

export class LoadProductsController extends Controller {
  constructor (private readonly productsLoader: ProductsLoader) {
    super()
  }

  async perform (): Promise<HttpResponse> {
    const products = await this.productsLoader()
    return ok(products)
  }
}
