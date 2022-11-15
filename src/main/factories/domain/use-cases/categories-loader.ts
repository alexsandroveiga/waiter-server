import { setupCategoriesLoader, CategoriesLoader } from '@/domain/use-cases'
import { makeMongoCategoryRepo } from '@/main/factories/infra/repositories/mongodb'

export const makeCategoriesLoader = (): CategoriesLoader => {
  return setupCategoriesLoader(makeMongoCategoryRepo())
}
