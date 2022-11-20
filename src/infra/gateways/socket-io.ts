import { EmitEvent } from '@/domain/contracts/gateways'

import { io } from '@/main/config/app'

export class SocketIoHandler implements EmitEvent {
  emit ({ key, value }: EmitEvent.Input): void {
    io.emit(key, value)
  }
}
