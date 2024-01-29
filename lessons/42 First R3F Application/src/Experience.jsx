import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Experience = () => {

  const cubeRef = useRef()
  const groupRef = useRef()

  //useFrame hook will be called on each frame ==> to animate etc...
  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta
    groupRef.current.rotation.y += delta
  })

  return (

    <>
      <group ref={groupRef}>
        <mesh position-x={-2} scale={0.8}>
          <sphereGeometry />
          <meshBasicMaterial color="orange" wireframe />
        </mesh>

        <mesh ref={cubeRef} rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
          <boxGeometry scale={1.5} />
          <meshBasicMaterial color="mediumpurple" wireframe={false} />
        </mesh>
      </group>

      <mesh position-y={-1} rotation-x={- Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="yellowgreen" />
      </mesh>
    </>
  );
};

export default Experience;