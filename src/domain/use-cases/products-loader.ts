import { FindProducts } from '@/domain/contracts/repositories'

type Setup = (productRepo: FindProducts) => ProductsLoader
export type ProductsLoader = () => Promise<FindProducts.Output>

export const setupProductsLoader: Setup = productRepo => async () => {
  return productRepo.find()
}
