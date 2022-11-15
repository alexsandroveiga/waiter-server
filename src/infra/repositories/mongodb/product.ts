import { FindProducts, SaveProduct } from '@/domain/contracts/repositories'
import { MongoRepository } from '@/infra/repositories/mongodb/helpers'
import { ProductModel, productSchema } from '@/infra/repositories/mongodb/schemas'

export class MongoProductRepository extends MongoRepository implements FindProducts, SaveProduct {
  async find (): Promise<FindProducts.Output> {
    const productRepo = this.getRepository<ProductModel>('Product', productSchema)
    const products = await productRepo.find()
    return products.map(product => ({
      id: product.id,
      name: product.name,
      description: product.name,
      imagePath: product.name,
      price: product.price,
      ingredients: product.ingredients,
      category: {
        id: product.category._id,
        name: product.category.name,
        icon: product.category.icon
      }
    }))
  }

  async save (input: SaveProduct.Input): Promise<SaveProduct.Output> {
    const productRepo = this.getRepository<ProductModel>('Product', productSchema)
    const product = await productRepo.create(input)
    return {
      id: product.id,
      name: product.name,
      description: product.name,
      imagePath: product.name,
      price: product.price,
      ingredients: product.ingredients,
      category: {
        id: product.category._id,
        name: product.category.name,
        icon: product.category.icon
      }
    }
  }
}
