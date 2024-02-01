import { useFrame } from '@react-three/fiber'
import { Stage, AccumulativeShadows, BakeShadows, ContactShadows, Environment, Lightformer, OrbitControls, RandomizedLight, Sky, SoftShadows, useHelper } from '@react-three/drei'
import { useRef } from 'react'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'
import { useControls } from 'leva'


export default function StageComponent() {

  const directionalLight = useRef()
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1)

  const cube = useRef()

  useFrame((state, delta) => {

    cube.current.rotation.y += delta * 0.2
  })


  const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } = useControls('environment map', {
    envMapIntensity: { value: 3.5, min: 0, max: 12 },
    envMapHeight: { value: 7, min: 0, max: 100 },
    envMapRadius: { value: 20, min: 10, max: 1000 },
    envMapScale: { value: 100, min: 10, max: 1000 },
  })

  return <>


    <Perf position="top-left" />

    <OrbitControls makeDefault />


    <Stage
      Shadows={{ type: 'contact', opacity: 0.2, blur: 3 }}
      environment="sunset"
      preset="portrait"
      intensity={1}
    >

      <mesh position-y={1} castShadow position-x={- 2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" envMapIntensity={envMapIntensity} />
      </mesh>

      <mesh position-y={1} castShadow ref={cube} position-x={2} scale={1.5} >
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" envMapIntensity={envMapIntensity} />
      </mesh>

    </Stage>

  </>
}