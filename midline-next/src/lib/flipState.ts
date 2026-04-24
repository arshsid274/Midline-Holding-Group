import type { ComponentType } from 'react'

export type FlipOrigin = {
  rect: DOMRect
  img: string
  video?: string
  Icon: ComponentType<{ size?: number; strokeWidth?: number }>
  name: string
  desc: string
  count: string
}

let _origin: FlipOrigin | null = null

export const setFlipOrigin = (data: FlipOrigin): void => { _origin = data }

export const consumeFlipOrigin = (): FlipOrigin | null => {
  const data = _origin
  _origin = null
  return data
}
