"use client";
import dynamic from "next/dynamic";
const DynamicInteractiveView = dynamic(
  () => import("@/app/_components/InteractiveView"),
  {
    ssr: false,
  }
);

export default DynamicInteractiveView;
