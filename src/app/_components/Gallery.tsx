import GalleryItem, { GalleryItemProps } from "@/app/_components/GalleryItem";

export default function Gallery({ items }: { items: GalleryItemProps[] }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => (
        <GalleryItem key={index} {...item} />
      ))}
    </div>
  );
}
