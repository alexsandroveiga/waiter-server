import { Controller } from '@/application/controllers/controller'
import { CreateProduct } from '@/domain/use-cases'
import { badRequest, HttpResponse, ok } from '@/application/helpers'

type HttpRequest = {
  name: string
  description: string
  file: { buffer: Buffer, mimeType: string }
  price: string
  ingredients?: string
  category: string
}

export class CreateProductController extends Controller {
  constructor (private readonly createProduct: CreateProduct) {
    super()
  }

  async perform ({ name, description, file, price, ingredients, category }: HttpRequest): Promise<HttpResponse> {
    if (!name) return badRequest(new Error('Name is required'))
    if (!description) return badRequest(new Error('Description is required'))
    if (!file) return badRequest(new Error('Image path is required'))
    if (!price) return badRequest(new Error('Price is required'))
    if (!category) return badRequest(new Error('Category is required'))
    const product = await this.createProduct({
      name,
      description,
      file,
      price: Number(price),
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      category
    })
    return ok(product)
  }
}
