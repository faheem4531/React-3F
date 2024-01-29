import { extend, useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { Camera } from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

//Extend will convert 3js class into declarative version and make it available for jsx
extend({ OrbitControls })

const Experience = () => {

  const { camera, gl } = useThree() // give the same useFrame state values but once
  const cubeRef = useRef()
  const groupRef = useRef()

  //useFrame hook will be called on each frame ==> to animate etc...
  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta
    // groupRef.current.rotation.y += delta
  })

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
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