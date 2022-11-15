import { Controller } from '@/application/controllers/controller'
import { CreateCategory } from '@/domain/use-cases'
import { badRequest, HttpResponse, ok } from '@/application/helpers'

type HttpRequest = { name: string, icon: string }

export class CreateCategoryController extends Controller {
  constructor (private readonly createCategory: CreateCategory) {
    super()
  }

  async perform ({ name, icon }: HttpRequest): Promise<HttpResponse> {
    if (name === undefined) return badRequest(new Error('Name is required'))
    if (icon === undefined) return badRequest(new Error('Icon is required'))
    const category = await this.createCategory({ name, icon })
    return ok(category)
  }
}
