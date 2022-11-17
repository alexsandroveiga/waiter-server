import { FindProducts, SaveProduct, FindProductsByCategory } from '@/domain/contracts/repositories'
import { ProductModel } from '@/infra/repositories/mongodb/models'

export class MongoProductRepository implements FindProducts, SaveProduct, FindProductsByCategory {
  async find (): Promise<FindProducts.Output> {
    const products = await ProductModel.find().populate('category')
    return products.map(product => ({
      id: product.id,
      name: product.name,
      description: product.description,
      imagePath: product.imagePath,
      price: product.price,
      ingredients: product.ingredients.map(ingredient => ({
        id: ingredient.id,
        name: ingredient.name,
        icon: ingredient.icon
      })),
      category: {
        id: product.category.id,
        name: product.category.name,
        icon: product.category.icon
      }
    }))
  }

  async save (input: SaveProduct.Input): Promise<SaveProduct.Output> {
    const product = await ProductModel.create(input)
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      imagePath: product.imagePath,
      price: product.price,
      ingredients: product.ingredients.map(ingredient => ({
        id: ingredient.id,
        name: ingredient.name,
        icon: ingredient.icon
      })),
      category: {
        id: product.category.id,
        name: product.category.name,
        icon: product.category.icon
      }
    }
  }

  async findByCategory ({ id }: FindProductsByCategory.Input): Promise<FindProductsByCategory.Output> {
    const products = await ProductModel.find().where('category').equals(id)
    return products.map(product => ({
      id: product.id,
      name: product.name,
      description: product.description,
      imagePath: product.imagePath,
      price: product.price,
      ingredients: product.ingredients.map(ingredient => ({
        id: ingredient.id,
        name: ingredient.name,
        icon: ingredient.icon
      }))
    }))
  }
}
