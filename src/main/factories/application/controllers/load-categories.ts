import { makeCategoriesLoader } from '@/main/factories/domain/use-cases'
import { LoadCategoriesController } from '@/application/controllers'

export const makeLoadCategoriesController = (): LoadCategoriesController => {
  return new LoadCategoriesController(makeCategoriesLoader())
}
