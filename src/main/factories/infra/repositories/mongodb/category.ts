import { MongoCategoryRepository } from '@/infra/repositories/mongodb'

export const makeMongoCategoryRepo = (): MongoCategoryRepository => {
  return new MongoCategoryRepository()
}
