import { makeCreateCategory } from '@/main/factories/domain/use-cases'
import { CreateCategoryController } from '@/application/controllers'

export const makeCreateCategoryController = (): CreateCategoryController => {
  return new CreateCategoryController(makeCreateCategory())
}
