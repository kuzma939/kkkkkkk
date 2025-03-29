'use client';

import products from '../../data/products';

export default function SeedButton() {
  const handleSeed = async () => {
    console.log('🌱 Кнопку натиснули — надсилаємо продукти порціями...');

    // 🔹 Хелпер для розбиття на шматки
    const chunks = (arr, size) =>
      Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
      );

    const productChunks = chunks(products, 10); // Розбиваємо по 10

    try {
      for (const [i, chunk] of productChunks.entries()) {
        console.log(`➡️ Надсилаємо частину ${i + 1} з ${productChunks.length}`);
        const res = await fetch('https://shoopingsite-backend.onrender.com/api/seed-products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(chunk),
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Помилка частини ${i + 1}: ${text}`);
        }
      }

      alert('✅ Усі продукти успішно додано!');
    } catch (error) {
      console.error('❌ Помилка при надсиланні продуктів:', error.message);
      alert('Щось пішло не так!');
    }
  };

  return (
    <button
      onClick={handleSeed}
      className="p-3 bg-green-600 text-white rounded hover:bg-green-700"
    >
      Додати продукти в базу
    </button>
  );
}
