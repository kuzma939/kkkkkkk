// utils/fetchGeoCities.js
// fetchGeoCities.js
const fetchGeoCities = async (query, deliveryMethod) => {
    const BASE_URL =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3001'
        : 'https://shoopingsite-backend.onrender.com';
  
    try {
      const res = await fetch(
        `${BASE_URL}/api/geo-cities?query=${encodeURIComponent(query)}&method=${deliveryMethod}`
      );
      if (!res.ok) throw new Error('Request failed');
      return await res.json();
    } catch (error) {
      console.error('❌ Помилка при пошуку міст:', error);
      return [];
    }
  };
  
  export default fetchGeoCities; // <<< ОЦЕ ВАЖЛИВО
  