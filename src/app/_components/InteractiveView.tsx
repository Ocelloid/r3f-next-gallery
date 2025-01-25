"use client";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Canvas } from "@react-three/fiber";
import { MapControls } from "@react-three/drei";
import { Suspense } from "react";
import { type GalleryItem } from "@/app/_components/GalleryItem";

export default function InteractiveView({ item }: { item: GalleryItem }) {
  const fbx = useLoader(FBXLoader, item.url);
  return (
    <div className="flex flex-col h-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 5, 15], fov: 60 }}
        style={{ height: "100vh", width: "100vw" }}
      >
        <Suspense fallback={null}>
          <MapControls />
          <ambientLight intensity={2} />
          <pointLight intensity={2} position={[1, 1, 1]} />
          <primitive object={fbx} scale={0.1} position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
}
