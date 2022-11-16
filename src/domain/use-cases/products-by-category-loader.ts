import { FindProductsByCategory } from '@/domain/contracts/repositories'

type Setup = (productRepo: FindProductsByCategory) => ProductsByCategoryLoader
type Input = FindProductsByCategory.Input
type Output = FindProductsByCategory.Output
export type ProductsByCategoryLoader = (input: Input) => Promise<Output>

export const setupProductsByCategoryLoader: Setup = productRepo => async ({ id }) => {
  return productRepo.findByCategory({ id })
}
