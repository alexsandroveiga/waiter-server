import { Product } from '@/domain/models/product'

export type Order = {
  id: string
  table: string
  status: string
  products: Array<{
    id: string
    product: Product
    quantity: number
  }>
  createdAt: Date
}
