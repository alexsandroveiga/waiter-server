import { Order } from '@/domain/models'
import { BaseSchema } from '@/infra/repositories/mongodb'

import { model, Schema } from 'mongoose'

export const OrderModel = model<Order>('Order', new BaseSchema({
  table: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
    default: 'WAITING'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  products: {
    type: [{
      product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
      },
      quantity: {
        type: Number,
        default: 1
      }
    }],
    required: true
  }
}))
