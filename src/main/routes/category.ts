import { expressRouterAdapter } from '@/main/adapters'
import { makeCreateCategoryController, makeLoadCategoriesController } from '@/main/factories/application/controllers'

import { Router } from 'express'

export default (router: Router): void => {
  router.get('/categories', expressRouterAdapter(makeLoadCategoriesController()))
  router.post('/categories', expressRouterAdapter(makeCreateCategoryController()))
}
