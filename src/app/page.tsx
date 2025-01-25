import Gallery from "@/app/_components/Gallery";
import EXAMPLE_ITEMS from "@/items";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full p-8">
      <div className="container flex flex-col gap-8 max-w-5xl">
        <h1 className="text-6xl font-bold">Добро пожаловать</h1>
        <Gallery items={EXAMPLE_ITEMS} />
      </div>
    </main>
  );
}
