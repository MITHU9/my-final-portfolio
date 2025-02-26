/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

const Cylinder = () => {
  return (
    <div className="bg-gray-800">
      <div className="md:h-[60vh] max-w-7xl mx-auto w-full md:flex gap-4 justify-between items-center ">
        <Canvas camera={{ fov: 35 }}>
          <OrbitControls />
          <ambientLight />
          <Scene />
        </Canvas>

        <div className="md:w-1/2 p-4 text-white">
          <h1 className="text-center text-white text-2xl font-bold">
            3D Portfolio Showcase
          </h1>
          <p className="text-center text-gray-300 mt-4">
            Welcome to my interactive 3D portfolio! This web experience
            showcases five unique projects, each presented in a stunning 3D
            environment using Three.js. The user can explore each project from
            different angles, interact with dynamic 3D objects, and fully
            immerse themselves in the creativity behind each project.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Cylinder;
