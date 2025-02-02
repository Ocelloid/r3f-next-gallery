// import Gallery from "@/app/_components/Gallery";
// import EXAMPLE_ITEMS from "@/items";
import DynamicRoomView from "./_components/DynamicRoomView";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full">
      <DynamicRoomView />
    </main>
  );
}
