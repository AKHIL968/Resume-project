// src/components/Laptop.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

function LaptopModel(props) {
  const { scene } = useGLTF('/path/to/your/laptop.glb');
  return <primitive object={scene} {...props} />;
}

function RotatingLaptop() {
  const ref = useRef();

  // Rotate the laptop based on mouse movement
  useFrame((state) => {
    const { x, y } = state.mouse;
    ref.current.rotation.y = x * Math.PI;
    ref.current.rotation.x = y * Math.PI;
  });

  return (
    <mesh ref={ref}>
      <LaptopModel />
    </mesh>
  );
}

function Laptop() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingLaptop />
    </Canvas>
  );
}

export default Laptop;
