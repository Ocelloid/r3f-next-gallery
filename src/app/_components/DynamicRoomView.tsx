"use client";
import dynamic from "next/dynamic";
const DynamicRoomView = dynamic(() => import("@/app/_components/RoomView"), {
  ssr: false,
});

export default DynamicRoomView;
