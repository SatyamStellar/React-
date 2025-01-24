import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const BackDrop = () => {
  return (
    <AccumulativeShadows
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10} // Fixed typo
      rotation={[Math.PI / 2, 0, 0]} // Ensure this rotation aligns with your scene
      position={[0, 0, -0.14]}
    >
      {/* Light 1 */}
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      {/* Light 2 */}
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.25}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
};

export default BackDrop;

