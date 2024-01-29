import React, { useMemo } from "react";
import * as THREE from 'three'

const CustomObject = () => {

  const verticesCount = 30



  const positions = useMemo(() => {

    const positions = new Float32Array(verticesCount * 3)


    for (let i = 0; i < verticesCount * 3; i++)
      positions[i] = (Math.random() - 0.5) * 3

    return positions
  }, [])

  return (
    <mesh>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={verticesCount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <meshBasicMaterial color="red" side={THREE.DoubleSide} />
    </mesh>
  );
};

export default CustomObject;