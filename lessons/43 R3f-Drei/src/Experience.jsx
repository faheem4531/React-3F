import { Float, Html, OrbitControls, PivotControls, Text, TransformControls } from "@react-three/drei";
import { useRef } from "react";

export default function Experience() {

    const cubeRef = useRef()
    const sphereRef = useRef()

    return <>
        <OrbitControls makeDefault />

        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <PivotControls
            anchor={[0, 0, 0]}
            depthTest={false}
            lineWidth={3}
            axisColors={['#9381ff', '#ff4d6d', '#7ae582']}
            scale={1}
        >
            <mesh position-x={- 2} ref={sphereRef}>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
                <Html
                    position={[1, 1, 0]}
                    wrapperClass="label"
                    center
                    distanceFactor={6}
                // occlude={[sphereRef, cubeRef]}
                >
                    Sphere
                </Html>
            </mesh>
        </PivotControls>


        <mesh position-x={2} scale={1.5} ref={cubeRef}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
        <TransformControls object={cubeRef} mode="translate" /> {/* mode = rotate,scale */}


        <mesh position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10}>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        <Float
            speed={2}
            floatIntensity={2}
        >
            <Text
                font="./bangers-v20-latin-regular.woff"
                color="salmon"
                position-y={2}
                maxWidth={2}
                textAlign="center"
            >
                Hello R3F
            </Text>
        </Float>

    </>
}