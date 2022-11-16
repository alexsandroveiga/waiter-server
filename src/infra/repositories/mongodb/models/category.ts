import { Category } from '@/domain/models'

import { model, Schema } from 'mongoose'

export const CategoryModel = model<Category>('Category', new Schema({
  name: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
}))
