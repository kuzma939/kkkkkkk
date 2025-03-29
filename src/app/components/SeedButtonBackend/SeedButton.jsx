'use client';

import products from '../../data/products';

export default function SeedButton() {
  const handleSeed = async () => {
    console.log("🌱 Кнопку натиснули — надсилаємо запит...");
    try {
      const res = await fetch('https://shoopingsite-backend.onrender.com/api/seed-products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(products),
      });

      const data = await res.json();
      alert(data.message || 'Успішно!');
    } catch (error) {
      console.error('❌ Помилка:', error);
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
