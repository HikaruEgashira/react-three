import { useGLTF } from '@react-three/drei'

export function Tree() {
  const gltf = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-beech/model.gltf'
  )

  return (
    <group position={[-10, 0, 0]}>
      <primitive object={gltf.scene} />
    </group>
  )
}
