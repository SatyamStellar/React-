import { useFrame } from "@react-three/fiber"
import { easing } from "maath"
import { useSnapshot } from "valtio"

import state from "../store"
import { useRef } from "react"


const CameraRig = ({ children }) => {
  const snap = useSnapshot(state)

  const group = useRef()

  return <group ref={group}>{children}</group>
}

export default CameraRig
