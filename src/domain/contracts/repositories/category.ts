import { Category } from '@/domain/models'

export interface FindCategories {
  find: () => Promise<FindCategories.Output>
}

export namespace FindCategories {
  export type Output = Category[]
}

export interface SaveCategory {
  save: (input: SaveCategory.Input) => Promise<SaveCategory.Output>
}

export namespace SaveCategory {
  export type Input = Omit<Category, 'id'>
  export type Output = Category
}
