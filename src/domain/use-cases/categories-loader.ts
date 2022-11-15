import { FindCategories } from '@/domain/contracts/repositories'

type Setup = (categoryRepo: FindCategories) => CategoriesLoader
type CategoriesLoader = () => Promise<FindCategories.Output>

export const setupCategoriesLoader: Setup = categoryRepo => async () => {
  return categoryRepo.find()
}
