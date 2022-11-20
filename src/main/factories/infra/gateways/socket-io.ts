import { SocketIoHandler } from '@/infra/gateways'

export const makeSocketIoHandler = (): SocketIoHandler => {
  return new SocketIoHandler()
}
