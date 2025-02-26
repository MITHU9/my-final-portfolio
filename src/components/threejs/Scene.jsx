/* eslint-disable react/no-unknown-property */
import { Reflector, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Scene = () => {
  const texture = useTexture("/cylinder3.png");

  let cylRef = useRef(null);

  useFrame((state, delta) => {
    cylRef.current.rotation.y += 0.008;
  });

  return (
    <group rotate={[0, 1.4, 0.5]}>
      <mesh ref={cylRef}>
        <cylinderGeometry args={[1, 1, 1, 50, 40, true]} />
        <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} />
      </mesh>

      {/* Water Surface with Reflection */}
      <Reflector
        position={[-0.51, -0.51, -0.51]}
        rotation={[-Math.PI / 2, 0, 0]}
        args={[3, 3]}
        mirror={1}
        resolution={1024}
        mixBlur={1}
        mixStrength={0.7}
        depthScale={1}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        distortion={0.2}
        color="#88ccff"
      />
    </group>
  );
};
export default Scene;
