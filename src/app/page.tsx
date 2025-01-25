import Gallery from "@/app/_components/Gallery";
import { GalleryItemProps } from "@/app/_components/GalleryItem";

const EXAMPLE_ITEMS: GalleryItemProps[] = [
  {
    title: "Пример заголовка",
    description: "Пример описания",
    url: "frame copy 3.fbx",
    scale: 0.001,
    position: [-0.075, 0, 0],
  },
  {
    title: "Пример заголовка",
    description: "Пример описания",
    url: "frame copy 2.fbx",
    scale: 0.01,
    position: [-0.75, 0, 0],
  },
  {
    title: "Пример заголовка",
    description: "Пример описания",
    url: "frame copy.fbx",
    scale: 0.1,
    position: [-7.5, 0, 0],
  },
  {
    title: "Пример заголовка",
    description: "Пример описания",
    url: "frame.fbx",
    scale: 1,
    position: [-75, 0, 0],
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full p-8">
      <div className="container flex flex-col gap-4 max-w-5xl">
        <h1 className="text-6xl font-bold">Добро пожаловать</h1>
        <Gallery items={EXAMPLE_ITEMS} />
      </div>
    </main>
  );
}
