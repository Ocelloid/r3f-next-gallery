import GalleryItemDisplay, {
  type GalleryItem,
} from "@/app/_components/GalleryItem";

export default function Gallery({ items }: { items: GalleryItem[] }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => (
        <GalleryItemDisplay key={index} {...item} />
      ))}
    </div>
  );
}
