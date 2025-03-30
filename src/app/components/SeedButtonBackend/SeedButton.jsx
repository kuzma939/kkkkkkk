import products from '../../data/products';
 
 export default function SeedButton() {
   const normalizeProduct = (raw) => {
     return {
       ...raw,
       images: raw.images?.filter(img => typeof img === 'string').map(url => ({ url })) || [],
       sizes: raw.sizes?.map(value => ({ value })) || [],
       translations: raw.translations
         ? Object.entries(raw.translations).map(([locale, t]) => ({
             locale,
             name: t.name,
             description: t.description,
             category: t.category,
             colors: t.colors,
           }))
         : [],
     };
   };
 
   const handleSeed = async () => {
     console.log('🌱 Кнопку натиснули — надсилаємо продукти порціями...');
 
     // 🔹 Хелпер для розбиття на шматки
     const normalized = products.map(normalizeProduct); // 💥 нормалізуємо
     const chunks = (arr, size) =>
       Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
         arr.slice(i * size, i * size + size)
       );
 

     const productChunks = chunks(normalized, 10); // Розбиваємо по 10
 
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