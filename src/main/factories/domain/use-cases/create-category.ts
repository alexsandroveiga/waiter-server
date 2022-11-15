import { setupCreateCategory, CreateCategory } from '@/domain/use-cases'
import { makeMongoCategoryRepo } from '@/main/factories/infra/repositories/mongodb'

export const makeCreateCategory = (): CreateCategory => {
  return setupCreateCategory(makeMongoCategoryRepo())
}
