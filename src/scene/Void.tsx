import { Stats } from '@react-three/drei'
import { Bench } from '../mesh/Bench'
import { Tree } from '../mesh/Tree'
import { Setup } from './Setup'

export const SceneVoid: React.FC = () => {
  return (
    <Setup camera={{ position: [10, 2, 0] }}>
      <Bench />
      <Tree />
      <Stats />
    </Setup>
  )
}
