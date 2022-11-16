import { expressRouterAdapter } from '@/main/adapters'
import { makeCreateOrderController, makeLoadOrdersController } from '@/main/factories/application/controllers'

import { Router } from 'express'

export default (router: Router): void => {
  router.get('/orders', expressRouterAdapter(makeLoadOrdersController()))
  router.post('/orders', expressRouterAdapter(makeCreateOrderController()))
}
