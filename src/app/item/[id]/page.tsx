import DynamicInteractiveView from "@/app/_components/DynamicInteractiveView";
import EXAMPLE_ITEMS from "@/items";
import { notFound } from "next/navigation";

export default async function Item({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = EXAMPLE_ITEMS.find((item) => item.id === id);
  if (!item) notFound();
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <DynamicInteractiveView item={item} />
    </div>
  );
}
