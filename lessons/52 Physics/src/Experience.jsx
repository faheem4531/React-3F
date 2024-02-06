import { OrbitControls } from '@react-three/drei'
import { Debug, Physics, RigidBody } from '@react-three/rapier'
import { Perf } from 'r3f-perf'
import { useRef } from 'react'

export default function Experience() {
    const cube = useRef()

    const cubeJump = () => {
        cube.current.applyImpulse({ x: 0, y: 5, z: 0 }) //apply force at y axis
        cube.current.applyTorqueImpulse({
            x: Math.random() - 0.5,
            y: Math.random() - 0.5,
            z: Math.random() - 0.5
        })
    }
    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <Physics gravity={[0, -9.81, 0]}>

            <Debug />
            {/* colliders = ball / trimesh / hull */}

            <RigidBody colliders="ball" position={[- 1.5, 2, 0]}>
                <mesh castShadow >
                    <sphereGeometry />
                    <meshStandardMaterial color="orange" />
                </mesh>
            </RigidBody>

            <RigidBody ref={cube} position={[1.5, 2, 0]} gravityScale={1}>
                <mesh castShadow onClick={cubeJump}>
                    <boxGeometry />
                    <meshStandardMaterial color="mediumpurple" />
                </mesh>
            </RigidBody>

            <RigidBody type='fixed'>
                <mesh receiveShadow position-y={- 1.25}>
                    <boxGeometry args={[10, 0.5, 10]} />
                    <meshStandardMaterial color="greenyellow" />
                </mesh>
            </RigidBody>
        </Physics>

    </>
}