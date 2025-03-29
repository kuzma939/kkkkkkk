import Link from 'next/link';
export default function Custom404() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold text-gray-800">404 - Сторінка не знайдена</h1>
      <p className="mt-4 text-lg text-gray-600">Здається, цієї сторінки не існує.</p>
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
