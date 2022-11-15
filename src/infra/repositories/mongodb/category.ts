import { FindCategories, SaveCategory } from '@/domain/contracts/repositories'
import { MongoRepository } from '@/infra/repositories/mongodb/helpers'
import { CategoryModel, categorySchema } from '@/infra/repositories/mongodb/schemas'

export class MongoCategoryRepository extends MongoRepository implements FindCategories, SaveCategory {
  async find (): Promise<FindCategories.Output> {
    const categoryRepo = this.getRepository<CategoryModel>('Category', categorySchema)
    return categoryRepo.find()
  }

  async save ({ name, icon }: SaveCategory.Input): Promise<SaveCategory.Output> {
    const categoryRepo = this.getRepository<CategoryModel>('Category', categorySchema)
    const category = await categoryRepo.create({ name, icon })
    return {
      id: category.id,
      name: category.name,
      icon: category.icon
    }
  }
}
