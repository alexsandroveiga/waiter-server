import { makeProductsLoader } from '@/main/factories/domain/use-cases'
import { LoadProductsController } from '@/application/controllers'

export const makeLoadProductsController = (): LoadProductsController => {
  return new LoadProductsController(makeProductsLoader())
}
