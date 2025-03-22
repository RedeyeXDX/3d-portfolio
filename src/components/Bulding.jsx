import { useGLTF } from "@react-three/drei";

export default function Building() {
  const { scene } = useGLTF("/models/Food Apartement2.glb", true);

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return <primitive object={scene} position={[0, -2, 0]} />;
}
