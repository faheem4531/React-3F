import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import * as Three from 'three'

const App = () => {
  return (
    <Canvas
      gl={
        {
          antialias: true,
          toneMappting: Three.ACESFilmicToneMapping,
          outputEncoding: Three.sRGBEncoding
        }
      }
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [3, 2, 6]
      }}
    >
      <Experience />
    </Canvas >
  );
};

export default App;