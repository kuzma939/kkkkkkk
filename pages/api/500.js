import Link from 'next/link';
export default function Custom500() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold text-gray-800">500 - Помилка сервера</h1>
      <p className="mt-4 text-lg text-gray-600">Щось пішло не так. Ми працюємо над цим!</p>
      <Link href="/">
      <a 
        className="mt-6 inline-block text-blue-500 underline hover:text-blue-700"
      >
        Повернутися на головну
      </a>
      </Link>
    </div>
  );
}
