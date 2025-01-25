"use client";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

export default function FBXView({
  url,
  position,
  scale,
}: {
  url: string;
  position?: number[];
  scale?: number;
}) {
  const fbx = useLoader(FBXLoader, url);
  return (
    <div className="flex flex-col h-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 5, 15], fov: 60 }}
        style={{ height: "25vh" }}
      >
        <Suspense fallback={null}>
          <OrbitControls />
          <ambientLight intensity={2} />
          <pointLight intensity={2} position={[1, 1, 1]} />
          <primitive
            object={fbx}
            scale={scale ? scale : 1}
            position={position ? position : [0, 0, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
