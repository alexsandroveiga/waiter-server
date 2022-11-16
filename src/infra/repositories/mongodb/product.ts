import { FindProducts, SaveProduct, FindProductsByCategory } from '@/domain/contracts/repositories'
import { MongoRepository } from '@/infra/repositories/mongodb/helpers'
import { ProductModel, productSchema, CategoryModel, categorySchema } from '@/infra/repositories/mongodb/schemas'

export class MongoProductRepository extends MongoRepository implements FindProducts, SaveProduct, FindProductsByCategory {
  async find (): Promise<FindProducts.Output> {
    const productRepo = this.getRepository<ProductModel>('Product', productSchema)
    const categoryRepo = this.getRepository<CategoryModel>('Category', categorySchema)
    const products = await productRepo.find().populate({ path: 'category', model: categoryRepo })
    return products.map(product => ({
      id: product.id,
      name: product.name,
      description: product.description,
      imagePath: product.imagePath,
      price: product.price,
      ingredients: product.ingredients.map(ingredient => ({
        name: ingredient.name,
        icon: ingredient.icon
      })),
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
      description: product.description,
      imagePath: product.imagePath,
      price: product.price,
      ingredients: product.ingredients.map(ingredient => ({
        name: ingredient.name,
        icon: ingredient.icon
      })),
      category: {
        id: product.category._id,
        name: product.category.name,
        icon: product.category.icon
      }
    }
  }

  async findByCategory ({ id }: FindProductsByCategory.Input): Promise<FindProductsByCategory.Output> {
    const productRepo = this.getRepository<ProductModel>('Product', productSchema)
    const products = await productRepo.find().where('category').equals(id)
    return products.map(product => ({
      id: product.id,
      name: product.name,
      description: product.description,
      imagePath: product.imagePath,
      price: product.price,
      ingredients: product.ingredients.map(ingredient => ({
        name: ingredient.name,
        icon: ingredient.icon
      }))
    }))
  }
}
