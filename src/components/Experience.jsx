import { useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useEffect } from "react";
import { OrbitControls, Environment, SoftShadows } from "@react-three/drei";
import Building from "./bulding";

export default function Experience() {
  const backgroundTexture = useLoader(TextureLoader, "/space.jpg");
  const { scene } = useThree();

  useEffect(() => {
    scene.background = backgroundTexture;
  }, [scene, backgroundTexture]);

  return (
    <>
      <color attach="background" args={["#000"]} />
      <SoftShadows size={15} />
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 10, 5]} intensity={1.2} />
      <Environment preset="night" />
      <OrbitControls
        minDistance={8}
        maxDistance={15}
        enableZoom={true}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />
      <Building />
    </>
  );
}
