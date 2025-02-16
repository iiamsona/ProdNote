// Experience.jsx
import { useAtom } from "jotai";
import { flyAtom } from "./atoms"; // Import the shared atom
import { Book } from "./Book";
import { Float, OrbitControls, Environment } from "@react-three/drei";

export const Experience = () => {
  const [fly] = useAtom(flyAtom); // Use the shared fly state

  return (
    <>
      {fly ? (
        <Float
          rotation-x={-Math.PI / 4}
          floatIntensity={1}
          speed={2}
          rotationIntensity={2}
        >
          <Book />
        </Float>
      ) : (
        <Book />
      )}
      <OrbitControls />
      <Environment preset="studio" />
      <directionalLight
        position={[2, 5, 2]}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};
