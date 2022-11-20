import { Product } from '@/domain/models'
import { BaseSchema } from '@/infra/repositories/mongodb'

import { model, Schema } from 'mongoose'

export const ProductModel = model<Product>('Product', new BaseSchema({
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
}))
