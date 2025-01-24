import { useFrame } from "@react-three/fiber"
import { easing } from "maath"
import { useSnapshot } from "valtio"

import state from "../store"
import { useRef } from "react"


const CameraRig = ({ children }) => {
  const snap = useSnapshot(state)

  const group = useRef()

  useFrame((state, delta) => {
    const isBreakpint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    let taragetPosition = [-0.4, 0, 2];

    if (snap.intro) {
      if (isBreakpint) taragetPosition = [0, 0, 2];
      if (isMobile) taragetPosition = [0, 0.2, 2.5]
    } else {
      if (isMobile) taragetPosition = [0, 0, 2.5];
      else taragetPosition = [0, 0, 2];
    }

    easing.damp3(state.camera.position, taragetPosition, 0.25, delta);

    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    )
  })



  return <group ref={group}>{children}</group>
}

export default CameraRig
