import { makeProductsByCategoryLoader } from '@/main/factories/domain/use-cases'
import { LoadProductsByCategoryController } from '@/application/controllers'

export const makeLoadProductsByCategoryController = (): LoadProductsByCategoryController => {
  return new LoadProductsByCategoryController(makeProductsByCategoryLoader())
}
