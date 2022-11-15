import { SaveProduct } from '@/domain/contracts/repositories'

type Setup = (productRepo: SaveProduct) => CreateProduct
export type CreateProduct = (input: SaveProduct.Input) => Promise<SaveProduct.Output>

export const setupCreateProduct: Setup = productRepo => async input => {
  return productRepo.save(input)
}
