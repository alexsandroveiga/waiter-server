import { expressRouterAdapter } from '@/main/adapters'
import { makeCreateProductController, makeLoadProductsController } from '@/main/factories/application/controllers'

import { Router } from 'express'

export default (router: Router): void => {
  router.get('/products', expressRouterAdapter(makeLoadProductsController()))
  router.post('/products', expressRouterAdapter(makeCreateProductController()))
}
