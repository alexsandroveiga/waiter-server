import { SaveCategory } from '@/domain/contracts/repositories'

type Setup = (categoryRepo: SaveCategory) => CreateCategory
type CreateCategory = (input: SaveCategory.Input) => Promise<SaveCategory.Output>

export const setupCreateCategory: Setup = categoryRepo => async ({ name, icon }) => {
  return categoryRepo.save({ name, icon })
}
