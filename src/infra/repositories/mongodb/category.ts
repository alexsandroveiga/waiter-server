import { FindCategories, SaveCategory } from '@/domain/contracts/repositories'
import { CategoryModel } from '@/infra/repositories/mongodb/models'

export class MongoCategoryRepository implements FindCategories, SaveCategory {
  async find (): Promise<FindCategories.Output> {
    const categories = await CategoryModel.find()
    return categories.map(category => ({
      id: category.id,
      name: category.name,
      icon: category.icon
    }))
  }

  async save ({ name, icon }: SaveCategory.Input): Promise<SaveCategory.Output> {
    const category = await CategoryModel.create({ name, icon })
    return {
      id: category.id,
      name: category.name,
      icon: category.icon
    }
  }
}
