import { Schema } from 'mongoose'

export type CategoryModel = {
  _id: string
  name: string
  icon: string
}

export const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
