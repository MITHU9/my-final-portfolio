/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls, MeshDistortMaterial } from "@react-three/drei";

function DistortedTorus() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1, 0.4, 32, 100]} />
      <MeshDistortMaterial color="purple" distort={0.6} speed={2} />
    </mesh>
  );
}

export default function PortfolioEffect() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <Canvas camera={{ position: [4, 4, 4] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <DistortedTorus />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
