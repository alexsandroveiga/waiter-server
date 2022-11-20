export interface EmitEvent {
  emit: (input: EmitEvent.Input) => void
}

export namespace EmitEvent {
  export type Input = { key: string, value: any }
}
