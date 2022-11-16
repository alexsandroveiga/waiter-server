import { makeOrdersLoader } from '@/main/factories/domain/use-cases'
import { LoadOrdersController } from '@/application/controllers'

export const makeLoadOrdersController = (): LoadOrdersController => {
  return new LoadOrdersController(makeOrdersLoader())
}
