import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, SoftShadows } from "@react-three/drei";
import Experience from "./Experience";

export default function Scene() {
  return (
    <Canvas shadows camera={{ position: [10, 8, 10], fov: 50 }}>
      <Experience />
    </Canvas>
  );
}
