import { Controller } from '@/application/controllers/controller'
import { CreateProduct } from '@/domain/use-cases'
import { badRequest, HttpResponse, ok } from '@/application/helpers'

type HttpRequest = {
  name: string
  description: string
  imagePath: string
  price: string
  ingredients?: string
  category: string
}

export class CreateProductController extends Controller {
  constructor (private readonly createProduct: CreateProduct) {
    super()
  }

  async perform ({ name, description, imagePath, price, ingredients, category }: HttpRequest): Promise<HttpResponse> {
    if (!name) return badRequest(new Error('Name is required'))
    if (!description) return badRequest(new Error('Description is required'))
    if (!imagePath) return badRequest(new Error('Image path is required'))
    if (!price) return badRequest(new Error('Price is required'))
    if (!category) return badRequest(new Error('Category is required'))
    console.log({
      name,
      description,
      imagePath,
      price: Number(price),
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      category
    })
    // return ok({})
    const product = await this.createProduct({
      name,
      description,
      imagePath,
      price: Number(price),
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      category
    })
    return ok(product)
  }
}
