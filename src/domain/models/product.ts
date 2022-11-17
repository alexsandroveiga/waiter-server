import { Category } from '@/domain/models'

export type Product = {
  id: string
  name: string
  description: string
  imagePath: string
  price: number
  ingredients: Ingredient[]
  category: Category
}

type Ingredient = {
  id: string
  name: string
  icon: string
}
