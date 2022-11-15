import { Controller } from '@/application/controllers/controller'
import { CategoriesLoader } from '@/domain/use-cases'
import { HttpResponse, ok } from '@/application/helpers'

export class LoadCategoriesController extends Controller {
  constructor (private readonly categoriesLoader: CategoriesLoader) {
    super()
  }

  async perform (): Promise<HttpResponse> {
    const categories = await this.categoriesLoader()
    return ok(categories)
  }
}
