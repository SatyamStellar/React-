import { Canvas } from "@react-three/fiber"
import { Environment, Center } from "@react-three/drei"


import BackDrop from "./BackDrop"
import Tshirt from "./Tshirt"
import CameraRig from "./CameraRig"


const CanvasModle = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameraRig>
        {/*   <BackDrop /> */}
        <Center>
          <Tshirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModle
