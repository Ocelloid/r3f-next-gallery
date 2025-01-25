import Link from "next/link";
import DynamicFBXView from "@/app/_components/DynamicFBXView";

interface GalleryItemProps {
  id: string;
  title: string;
  description: string;
  url: string;
  scale?: number;
  position?: number[];
}

export type GalleryItem = GalleryItemProps;

export default function GalleryItemDisplay(item: GalleryItem) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 border-2 border-slate-300 p-4 rounded-lg">
      <div className="sm:w-1/2 flex flex-col gap-4">
        <h2 className="text-2xl font-bold">{item.title}</h2>
        <p className="text-lg">{item.description}</p>
        <Link
          href={`/item/${item.id}`}
          className="text-blue-500 hover:underline"
        >
          Просмотреть в интерактивном режиме
        </Link>
      </div>
      <div className="w-full flex flex-col">
        <DynamicFBXView
          url={item.url}
          scale={item.scale}
          position={item.position}
        />
      </div>
    </div>
  );
}
