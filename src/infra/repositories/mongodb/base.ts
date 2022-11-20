import { Schema, SchemaOptions } from 'mongoose'

export class BaseSchema extends Schema {
  constructor (schema: any, options?: SchemaOptions) {
    super(schema, options)
    this.set('toJSON', {
      virtuals: true,
      transform: (doc, converted) => {
        delete converted._id
        delete converted.__v

        if (converted.ingredients) {
          converted.ingredients = converted.ingredients.map(({ _id, ...item }: any) => ({
            id: _id,
            ...item
          }))
        }

        if (converted.products) {
          converted.products = converted.products.map(({ _id, ...item }: any) => ({
            id: _id,
            ...item
          }))
        }
      }
    })
  }
}
