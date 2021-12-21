import { useFrame } from '@react-three/fiber'
import React from 'react'
import type { Mesh } from 'three'

export function useTurntable() {
  const ref = React.useRef<Mesh>(null!)
  useFrame(() => {
    ref.current.rotation.y += 0.01
  })

  return ref
}
