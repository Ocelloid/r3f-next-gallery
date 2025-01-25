import FBXView from "./FBXView";

export interface GalleryItemProps {
  title: string;
  description: string;
  url: string;
  scale?: number;
  position?: number[];
}

export default function GalleryItem({
  title,
  description,
  url,
  scale,
  position,
}: GalleryItemProps) {
  return (
    <div className="flex flex-row gap-4 border-2 border-slate-300 p-4 rounded-lg">
      <div className="w-1/2 flex flex-col gap-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
      <div className="w-full flex flex-col">
        <FBXView url={url} scale={scale} position={position} />
      </div>
    </div>
  );
}
