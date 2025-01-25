import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="flex flex-row max-w-sm items-center justify-center gap-4">
        <div className="text-2xl font-bold">404</div>
        <div className="flex flex-col border-l-2 border-slate-300 p-4">
          <p>Ресурс по этому адресу не найден</p>
          <Link href="/" className="text-blue-500 hover:underline">
            Вернуться на главную страницу
          </Link>
        </div>
      </div>
    </div>
  );
}
