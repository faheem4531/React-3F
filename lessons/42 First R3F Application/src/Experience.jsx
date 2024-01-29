import React from "react";

const Experience = () => {
  return (
    <>
      <mesh position-x={-2} scale={0.8}>
        <sphereGeometry />
        <meshBasicMaterial color="orange" wireframe />
      </mesh>

      <mesh rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
        <boxGeometry scale={1.5} />
        <meshBasicMaterial color="mediumpurple" wireframe={false} />
      </mesh>

      <mesh position-y={-1} rotation-x={- Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="yellowgreen" />
      </mesh>
    </>
  );
};

export default Experience;