import { Vector3 } from 'three'
import { Canvas, Props as CanvasProps } from '@react-three/fiber'
import { Html, OrbitControls, Loader } from '@react-three/drei'
import { A11yAnnouncer } from '@react-three/a11y'
import { Suspense } from 'react'

type Props = React.PropsWithChildren<
  CanvasProps & {
    cameraFov?: number
    cameraPosition?: Vector3
    controls?: boolean
    lights?: boolean
  }
>

export const Setup = ({
  children,
  cameraFov = 75,
  cameraPosition = new Vector3(-5, 5, 5),
  controls = true,
  lights = true,
  ...restProps
}: Props) => (
  <>
    <Canvas
      shadows
      camera={{ position: cameraPosition, fov: cameraFov }}
      dpr={window.devicePixelRatio}
      {...restProps}
    >
      <Suspense
        fallback={
          <Html center>
            <Loader />
          </Html>
        }
      >
        {children}
      </Suspense>
      {lights && (
        <>
          <ambientLight intensity={0.8} />
          <pointLight intensity={1} position={[0, 6, 0]} />
        </>
      )}
      {controls && <OrbitControls />}
    </Canvas>
    <A11yAnnouncer />
  </>
)
