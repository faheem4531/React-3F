import { extend, useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { Camera } from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import CustomObject from "./CustomObject";

//Extend will convert 3js class into declarative version and make it available for jsx
extend({ OrbitControls })

const Experience = () => {

  const { camera, gl } = useThree() // give the same useFrame state values but once
  const cubeRef = useRef()
  const groupRef = useRef()

  //useFrame hook will be called on each frame ==> to animate etc...
  useFrame((state, delta) => {

    const angle = state.clock.elapsedTime
    state.camera.position.x = Math.sin(angle) * 8
    state.camera.position.z = Math.cos(angle) * 8
    state.camera.lookAt(0, 0, 0)


    cubeRef.current.rotation.y += delta
    // groupRef.current.rotation.y += delta
  })

  return (
    <>
      {/* <orbitControls args={[camera, gl.domElement]} /> */}

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <group ref={groupRef}>
        <mesh position-x={-2} scale={0.8}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" wireframe />
        </mesh>

        <mesh ref={cubeRef} rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
          <boxGeometry scale={1.5} />
          <meshStandardMaterial color="mediumpurple" wireframe={false} />
        </mesh>
      </group>

      <mesh position-y={-1} rotation-x={- Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="yellowgreen" />
      </mesh>
      <CustomObject />
    </>
  );
};

export default Experience;