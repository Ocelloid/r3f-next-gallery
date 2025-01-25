"use client";
import dynamic from "next/dynamic";
const DynamicFBXView = dynamic(() => import("@/app/_components/FBXView"), {
  ssr: false,
});

export default DynamicFBXView;
