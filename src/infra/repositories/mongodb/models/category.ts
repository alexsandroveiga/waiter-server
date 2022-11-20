import { Category } from '@/domain/models'
import { BaseSchema } from '@/infra/repositories/mongodb'

import { model } from 'mongoose'

export const CategoryModel = model<Category>('Category', new BaseSchema({
  name: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
}))
