import { expressRouterAdapter } from '@/main/adapters'
import { makeCancelOrderController, makeChangeOrderStatusController, makeCreateOrderController, makeLoadOrdersController } from '@/main/factories/application/controllers'

import { Router } from 'express'

export default (router: Router): void => {
  router.get('/orders', expressRouterAdapter(makeLoadOrdersController()))
  router.post('/orders', expressRouterAdapter(makeCreateOrderController()))
  router.patch('/orders/:id', expressRouterAdapter(makeChangeOrderStatusController()))
  router.delete('/orders/:id', expressRouterAdapter(makeCancelOrderController()))
}
