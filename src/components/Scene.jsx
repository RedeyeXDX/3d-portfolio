import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, SoftShadows } from "@react-three/drei";
import Experience from "./Experience";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function Scene() {
  return (
    <Canvas shadows camera={{ position: [10, 8, 10], fov: 50 }}>
      {/* Lights, model, etc */}
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 10, 5]} intensity={2} />

      <Experience />
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.2}
          luminanceSmoothing={0.2}
          intensity={0.2}
        />
      </EffectComposer>
    </Canvas>
  );
}
