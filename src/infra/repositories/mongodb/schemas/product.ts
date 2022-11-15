import { CategoryModel } from '@/infra/repositories/mongodb/schemas'

import { Schema } from 'mongoose'

export type ProductModel = {
  _id: string
  name: string
  description: string
  imagePath: string
  price: number
  ingredients: Ingredient[]
  category: CategoryModel
}

type Ingredient = {
  _id: string
  name: string
  icon: string
}

export const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imagePath: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  ingredients: {
    type: [{
      name: { type: String, required: true },
      icon: { type: String, required: true }
    }],
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category'
  }
})
