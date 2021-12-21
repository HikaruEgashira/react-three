import { useGLTF } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export const Bench = () => {
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bench-2/model.gltf'
  )
  const group = useRef<THREE.Group>(null!)
  useEffect(() => {
    group.current.rotation.set(0, THREE.MathUtils.degToRad(90), 0)
  }, [])

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  )
}
