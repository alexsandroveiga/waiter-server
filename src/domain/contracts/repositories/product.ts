import { Product } from '@/domain/models'

export interface FindProducts {
  find: () => Promise<FindProducts.Output>
}

export namespace FindProducts {
  export type Output = Product[]
}

export interface SaveProduct {
  save: (input: SaveProduct.Input) => Promise<SaveProduct.Output>
}

export namespace SaveProduct {
  export type Input = Omit<Product, 'id' | 'category'> & { category: string }
  export type Output = Product
}
