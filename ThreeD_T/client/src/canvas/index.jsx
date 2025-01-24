import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import BackDrop from "./BackDrop";
import Tshirt from "./Tshirt";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]} // Adjust position if needed
        intensity={1}         // Higher intensity for stronger lighting
        castShadow
      />
      <Environment preset="city" />

      {/* Camera Rig and Scene Components */}
      <CameraRig>
        <BackDrop />
        <Center>
          <Tshirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;

