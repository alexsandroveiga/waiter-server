import { makeCreateProduct } from '@/main/factories/domain/use-cases'
import { CreateProductController } from '@/application/controllers'

export const makeCreateProductController = (): CreateProductController => {
  return new CreateProductController(makeCreateProduct())
}
