/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import MagnetLines from "../animate/MagnetLines";

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
          <MagnetLines
            rows={7}
            columns={9}
            containerSize="60vmin"
            lineColor="tomato"
            lineWidth="0.8vmin"
            lineHeight="5vmin"
            baseAngle={0}
            style={{ margin: "2rem auto" }}
          />
        </div>
      </div>
    </div>
  );
};
export default Cylinder;
