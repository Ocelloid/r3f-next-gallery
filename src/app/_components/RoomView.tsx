"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Vector3, type PerspectiveCamera as TPerspectiveCamera } from "three";
import { Suspense, useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import RoundedButton from "./ui/RoundedButton";

function CameraControlsWrapper({ tgt, pos }: { tgt: Vector3; pos: Vector3 }) {
  const ref = useRef<TPerspectiveCamera>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.position.lerp(pos, 0.05);
      ref.current.lookAt(tgt);
    }
  });

  return <PerspectiveCamera makeDefault ref={ref} />;
}

export default function RoomView() {
  const router = useRouter();
  const fbx = useLoader(FBXLoader, "/room.fbx");
  // const boardFBX = useLoader(FBXLoader, "/Board.fbx");
  const board = useGLTF("/BoardGLB.glb");
  const [pos, setPos] = useState(new Vector3(0, 40, 0));
  const [tgt, setTgt] = useState(new Vector3());
  const [active, setActive] = useState(false);
  const handleMoveCamera = (newPos: Vector3, newTgt: Vector3) => {
    setPos(newPos);
    setTgt(newTgt);
  };

  useEffect(() => {
    document.body.style.cursor = active ? "pointer" : "auto";
  }, [active]);

  return (
    <div className="flex flex-col h-full">
      <Canvas shadows dpr={[1, 2]} style={{ height: "100vh", width: "100vw" }}>
        <Suspense fallback={null}>
          <ambientLight intensity={2} />
          <directionalLight
            position={[10, 100, 10]}
            castShadow
            intensity={10}
          />
          <primitive object={fbx} scale={0.01} position={[0, -10, 1]} />
          <primitive object={board} scale={0.01} position={[0, -10, 0]} />
          <mesh
            position={[-5.75, 8, -19.5]}
            onPointerOver={() => setActive(true)}
            onPointerLeave={() => setActive(false)}
            onClick={() => router.push("/item/1")}
          >
            <boxGeometry args={[5.25, 5.25, 0.25]} />
            <meshPhongMaterial color={active ? "red" : "green"} />
          </mesh>
          <CameraControlsWrapper tgt={tgt} pos={pos} />
        </Suspense>
      </Canvas>
      <div className="flex flex-row w-full absolute items-center justify-center top-0 py-2 gap-2 bg-slate-950/75">
        <RoundedButton
          pull={0.1}
          className="flex py-2 px-4 cursor-pointer items-center justify-center rounded-full text-white text-2xl"
          onClick={() => {
            handleMoveCamera(new Vector3(0, 40, 0), new Vector3(0, 0, 0));
          }}
        >
          Ковёр
        </RoundedButton>
        <RoundedButton
          pull={0.1}
          className="flex py-2 px-4 cursor-pointer items-center justify-center rounded-full text-white text-2xl"
          onClick={() => {
            handleMoveCamera(new Vector3(0, 2, 7), new Vector3(10, 0, 7));
          }}
        >
          Аквариум
        </RoundedButton>
        <RoundedButton
          pull={0.1}
          className="flex py-2 px-4 cursor-pointer items-center justify-center rounded-full text-white text-2xl"
          onClick={() => {
            handleMoveCamera(new Vector3(-5, 5, -2), new Vector3(-5, 5, -5));
          }}
        >
          Доска
        </RoundedButton>
        <RoundedButton
          pull={0.1}
          className="flex py-2 px-4 cursor-pointer items-center justify-center rounded-full text-white text-2xl"
          onClick={() => {
            handleMoveCamera(new Vector3(-2, 7, 0), new Vector3(5, 3, -5));
          }}
        >
          Стол
        </RoundedButton>
      </div>
    </div>
  );
}
