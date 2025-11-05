import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

interface FloatingCubeProps {
  position?: [number, number, number];
  color?: string;
  emissive?: string;
}

const FloatingCube = ({ 
  position = [0, 0, 0], 
  color = "#a855f7",
  emissive = "#7c3aed"
}: FloatingCubeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime()) * 0.3;
    }
  });

  return (
    <RoundedBox
      ref={meshRef}
      args={[1, 1, 1]}
      position={position}
      radius={0.1}
      smoothness={4}
    >
      <meshStandardMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={0.5}
        roughness={0.2}
        metalness={0.8}
      />
    </RoundedBox>
  );
};

export default FloatingCube;