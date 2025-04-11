import products from '../../data/products.js'; 
import fetch from 'node-fetch';

const API_URL = 'http://localhost:3001/api/seed-products';
const BATCH_SIZE = 50;

const delay = ms => new Promise(res => setTimeout(res, ms));

async function sendProducts(batch, index) {
  console.log(`➡️ Надсилаємо порцію ${index + 1}`);
  console.log(`📦 Надсилаємо продукти:`, batch.map(p => p.id));

  const cleanedBatch = batch.map(p => ({
    ...p,
    images: Array.isArray(p.images)
      ? p.images.filter(item => typeof item === 'string')
      : [],
  }));

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cleanedBatch),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`❌ Помилка в порції ${index + 1}:\n🔍 Код: ${response.status}, Відповідь:`, errorText);
    throw new Error('Завантаження перервано через помилку сервера');
  }

  const result = await response.json();
  console.log(`✅ Успішно: ${result.message}`);
}

// 🟡 Ось сюди вписується run() після всіх функцій:
async function run() {
  const chunks = [];

  for (let i = 0; i < products.length; i += BATCH_SIZE) {
    chunks.push(products.slice(i, i + BATCH_SIZE));
  }

  for (let i = 0; i < chunks.length; i++) {
    try {
      await sendProducts(chunks[i], i);
      await delay(500);
    } catch (err) {
      console.error('🛑 Відправку зупинено:', err.message);
      break;
    }
  }
}

run(); // 👈 Запускає все!

{/*import fetch from 'node-fetch';

import products from '../../data/products.js'; 
const normalizeProduct = (raw) => ({
  ...raw,
  images: raw.images?.filter(img => typeof img === 'string') || [],
  sizes: raw.sizes?.filter(s => typeof s === 'string') || [],
  translations: raw.translations ?? {},
});

const sendProducts = async () => {
  const normalized = products.map(normalizeProduct);
  const chunks = Array.from({ length: Math.ceil(normalized.length / 10) }, (_, i) =>
    normalized.slice(i * 10, i * 10 + 10)
  );
  for (const [i, chunk] of chunks.entries()) {
    console.log(`➡️ Надсилаємо порцію ${i + 1}`);
    console.log('📦 Надсилаємо продукти:', JSON.stringify(chunk, null, 2));
  
    const res = await fetch('https://shoopingsite-backend.onrender.com/api/seed-products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(chunk),
    });
  
    if (!res.ok) {
      const error = await res.json().catch(() => ({}));
      console.error(`❌ Помилка в порції ${i + 1}:`);
      console.error('🔍 Відповідь сервера:', error);
      throw new Error('Завантаження перервано через помилку сервера');
    }
    
  }
  
  

  console.log('✅ Готово!');
};

sendProducts();
{/*import fetch from 'node-fetch';
import products from '../../data/products.js'; 
const normalizeProduct = (raw) => ({
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
});

const sendProducts = async () => {
  const normalized = products.map(normalizeProduct);
  const chunks = Array.from({ length: Math.ceil(normalized.length / 10) }, (_, i) =>
    normalized.slice(i * 10, i * 10 + 10)
  );

  for (const [i, chunk] of chunks.entries()) {
    console.log(`➡️ Надсилаємо порцію ${i + 1}`);
    const res = await fetch('https://shoopingsite-backend.onrender.com/api/seed-products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(chunk),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`❌ Помилка ${i + 1}: ${text}`);
    }
  }

  console.log('✅ Готово!');
};

sendProducts();
*/}